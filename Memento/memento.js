// Memento: Guarda el texto tal como estaba
class Memento {
    constructor(text) {
        this.text = text;
    }
}

// ORIGINATOR: El objeto que queremos guardar/restaurar
class Editor {
    constructor() {
        this.text = ""; // El texto actual del editor
    }

    // Escribe nuevo texto al final del existente
    write(newText) {
        this.text += newText;
    }

    // Guarda el estado actual
    save() {
        return new Memento(this.text);
    }

    // Restaura el estado guardado previamente
    restore(memento) {
        this.text = memento.text;
    }
}

// CARETAKER: El que maneja las "estados"
// Crea un historial con todos los textos guardados
class History {
    constructor() {
        this.mementos = []; // Array que guarda todas los estados
    }

    // Agrega una nueve estado
    add(memento) {
        this.mementos.push(memento);
    }

    // Devuelve el ultimo estado y lo saca del array
    undo() {
        if (this.mementos.length > 0) {
            return this.mementos.pop();
        }
        return null; // No hay estados para mostrar
    }
}

// UI

let editor, history;

// Función que se ejecuta cuando la página carga
// Crea las instancias del editor y el historial
function init() {
    editor = new Editor(); // Crea un editor nuevo
    history = new History(); // Crea un historial nuevo
    updateDisplay(); // Actualiza la pantalla
}

// Función que se ejecuta al hacer clic en "Agregar"
function addText() {
    const input = document.getElementById('textInput');
    if (input.value) { 
       //Guarda el estado actual antes de hacer cambios
        history.add(editor.save());
        
        // Agrega el nuevo texto
        editor.write(input.value + " ");
        
        // Limppia el campo de entrada
        input.value = "";
        
        // Actualiza la pantalla
        updateDisplay();
    }
}

// Función que se ejecuta al hacer clic en "Undo"
function undo() {
    //Pedimos el ultimo estado guardado
    const memento = history.undo();
    
    if (memento) {
        // Restaura el estado desde el ultimo estado guardado
        editor.restore(memento);
        
        // Actuliza  la pantalla
        updateDisplay();
    }
    // Si no hay estados gurdados, no hace nada
}

// Función que actualiza lo que ve el usuario en la pantalla
function updateDisplay() {
    // Muestra el texto actual del editor en el textarea
    document.getElementById('textArea').value = editor.text;
    
    // Deshabilita el botón Undo si no hay historial
    document.getElementById('undoBtn').disabled = history.mementos.length === 0;
}


document.addEventListener('DOMContentLoaded', init);