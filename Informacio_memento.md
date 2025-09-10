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


### **1. Problema que Resuelve**:

- "Imaginen que están escribiendo en Word y quieren deshacer algo"
- "El patrón Memento es como programar esa funcionalidad de 'deshacer'"


### **3. Ventajas**:

- **Deshacer/Rehacer**: Como Ctrl+Z y Ctrl+Y
- **Historial**: Guarda todos los estados
- **Seguridad**: No pierdes trabajo
- **Flexibilidad**: Puedes volver a cualquier punto


