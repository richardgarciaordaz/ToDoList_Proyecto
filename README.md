# ToDoList_Proyecto

Descripción de la construcción del proyecto "To-Do List"
Introducción:

Este proyecto consiste en la creación de una aplicación web sencilla para gestionar listas de tareas pendientes. La aplicación se basa en HTML, CSS y JavaScript para proporcionar una interfaz de usuario intuitiva y funcional.

Estructura del proyecto:

El proyecto se compone de tres archivos principales:

index.html: Define la estructura básica de la página web, incluyendo el encabezado, el cuerpo y el pie de página. También contiene enlaces a los archivos CSS y JavaScript.
styles.css: Define el estilo visual de la aplicación, incluyendo colores, tipografías, tamaños de fuente y disposición de los elementos.
script.js: Contiene la lógica principal de la aplicación, como la adición, eliminación y marcado de tareas pendientes, así como la interacción con el almacenamiento local para persistir los datos.

Funcionalidades de la aplicación:

1. Agregar tareas:

El usuario puede ingresar una nueva tarea en un campo de entrada y hacer clic en un botón o presionar la tecla Enter para agregarla a la lista.
La tarea se agrega como un nuevo elemento en la lista, mostrando su descripción y un icono para marcarla como completada o eliminarla.

![image](https://github.com/richardgarciaordaz/ToDoList_Proyecto/assets/64115217/d2412571-4149-4fa5-a6fc-63912fb3ecd4)


2. Marcar tareas como completadas:

Al hacer clic en el icono de círculo vacío (indicando una tarea pendiente) junto a la descripción de la tarea, se marca como completada.

![image](https://github.com/richardgarciaordaz/ToDoList_Proyecto/assets/64115217/47b9135e-3e1a-4f0b-adcb-8afed39925c4)

3. Eliminar tareas:

Al hacer clic en el icono de la papelera junto a la descripción de la tarea, se muestra un modal de confirmación.
Si el usuario confirma la eliminación, la tarea se elimina de la lista y se actualiza el almacenamiento local.

![image](https://github.com/richardgarciaordaz/ToDoList_Proyecto/assets/64115217/bc81bc3d-ebd9-489b-ba82-4ed9d0754414)

4. Almacenamiento local:

La aplicación utiliza el almacenamiento local del navegador para persistir los datos de la lista de tareas.
Al cerrar y volver a abrir la página, las tareas guardadas previamente se cargan y muestran en la lista.


La tarea completada cambia su estilo de texto a tachado y el icono se actualiza a un círculo con un tilde en su interior.
