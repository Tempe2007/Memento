# GUÍA PARA EXPLICAR EL PATRÓN MEMENTO

**¿Qué es el Patrón Memento?**

Es un patrón de diseño que permite guardar y restaurar el estado de un objeto sin violar la encapsulación. Es como tener un "Ctrl+Z" en tu aplicación, pero programado por ti.

**Las 3 Partes del Patrón**

### 1. **MEMENTO**

- **¿Qué es?**: Una "fotografía" del estado
- **¿Para qué?**: Guarda cómo estaba el objeto en un momento específico
- **Analogía**: Como una screan de tu pantalla

### 2. **ORIGINATOR**

- **¿Qué es?**: El objeto que queremos guardar/restaurar
- **¿Para qué?**: Maneja su propio estado y puede crear/restaurar mementos
- **Analogía**: Como un editor de texto que puede guardar y cargar archivos

### 3. **CARETAKER**

- **¿Qué es?**: El que maneja los datos guardados
- **¿Para qué?**: Almacena y devuelve los mementos
- **Analogía**: Como un álbum de fotos que guarda todas las instantáneas

**¿Cómo Funciona?**

### **Proceso de Guardar**:

1. El usuario hace una acción
2. **ANTES** de hacer el cambio, guardamos el estado actual
3. Hacemos el cambio
4. El usuario ve el resultado

### **Proceso de Restaurar**:

1. El usuario hace clic en "Undo"
2. Pedimos el ultimo elemento guardado
3. Restauramos el estado desde esa fotografía
4. El usuario ve el estado anterior

---

**Explicación del Código**

### **Clase Memento**:

```javascript
class Memento {
  constructor(text) {
    this.text = text; // Guarda el texto tal como estaba
  }
}
```

**Explicación**: Es como una caja que guarda el texto exactamente como estaba.

### **Clase Editor**:

```javascript
class Editor {
  save() {
    return new Memento(this.text); // Crea una "fotografía"
  }

  restore(memento) {
    this.text = memento.text; // Restaura desde la "fotografía"
  }
}
```

**Explicación**: Puede tomar una "fotografía" de su estado actual y también puede volver a un estado anterior.

### **Clase History**:

```javascript
class History {
  add(memento) {
    this.mementos.push(memento); // Guarda la "fotografía"
  }

  undo() {
    return this.mementos.pop(); // Devuelve la última "fotografía"
  }
}
```

**Explicación**: Es como un álbum que guarda todas las "fotografías" y puede devolver la más reciente.

**Puntos Clave para la Explicación Oral**

### **1. Problema que Resuelve**:

- "Imaginen que están escribiendo en Word y quieren deshacer algo"
- "El patrón Memento es como programar esa funcionalidad de 'deshacer'"

### **2. Analogía Principal**:

- "Es como tener un álbum de fotos de tu aplicación"
- "Cada vez que haces algo importante, tomas una foto"
- "Si algo sale mal, puedes volver a la foto anterior"

### **3. Ventajas**:

- **Deshacer/Rehacer**: Como Ctrl+Z y Ctrl+Y
- **Historial**: Guarda todos los estados
- **Seguridad**: No pierdes trabajo
- **Flexibilidad**: Puedes volver a cualquier punto

### **4. Cuándo Usarlo**:

- Editores de texto
- Editores de imágenes
- Juegos (guardar partida)
- Aplicaciones de dibujo
- Cualquier app donde el usuario pueda "arrepentirse"

**Conclusión para la Explicación**

"El patrón Memento es una herramienta muy útil que nos permite darle a nuestros usuarios la capacidad de deshacer acciones, como si fuera un Ctrl+Z personalizado. Es especialmente útil en aplicaciones donde el usuario trabaja con contenido que puede querer modificar o revertir."
