# Prueba Devsu - Banco del Pichincha

Este repositorio contiene la solución para una prueba de codificación para el Banco del Pichincha. La aplicación es un sistema de gestión de productos que permite a los usuarios ver, buscar, agregar, editar y eliminar productos financieros.

## Características

Mostrar productos
Buscar productos
Agregar nuevos productos
Editar productos existentes
Eliminar productos
Historias de Usuario
Como Oficial de Cuenta del Banco del Pichincha, quiero tener una aplicación para visualizar los diferentes productos financieros ofrecidos por la Institución, además de poder crear nuevos productos, editarlos y eliminarlos.

## Criterios de Aceptación

### Escenario A: Diseño de Maquetación

Dado que queremos evaluar el nivel de conocimiento en el desarrollo de Frontend, requerimos que se implemente el diseño propuesto.

### Escenario B: Implementación de Funcionalidad

Dado que queremos mostrar elementos consumidos desde una API, requerimos que los elementos consumidos desde la API se muestren en el diseño propuesto, además de poder realizar acciones de búsqueda, creación, eliminación y edición mediante el consumo de la API.

### Escenario C: Implementación de Pruebas

Dado que queremos evaluar el nivel de conocimiento en pruebas, requerimos que el código desarrollado tenga pruebas unitarias de los diferentes componentes. La cobertura de las pruebas unitarias debe ser del 100%.

## Requerimientos

El ejercicio debe ser desarrollado utilizando rutas de React.
La vista de la tabla de información de productos debe ser implementada de acuerdo al diseño propuesto.
La funcionalidad de búsqueda para la información obtenida por el servicio debe ser implementada.
Se debe mostrar el total de elementos que se obtienen desde el servicio.
Se debe implementar un botón de "Agregar" para navegar al formulario de registro.
Dentro de cada fila, incluir un menú contextual al hacer clic en los 3 puntos donde constarán las opciones de Editar y Eliminar el producto financiero.
Adicional: Funcionalidad de paginación de 5 elementos por página.
La vista del formulario de registro/edición de un producto financiero debe ser implementada de acuerdo al diseño propuesto.
El input correspondiente a la fecha de revisión se debe mantener inhabilitado y se debe llenar automáticamente siguiendo la regla: "La Fecha de Revisión será un año exacto posterior a la Fecha de Liberación".
El botón de Enviar debe mantenerse desactivado mientras el formulario contenga errores.
El formulario debe mostrar visualmente al cliente el estado de error de cada campo.
Al momento de Editar un producto este no podrá cambiar de ID por lo cual deberá mantenerse deshabilitado.

# Instalación

Para instalar el proyecto, sigue estos pasos:

Clona el repositorio: git clone `https://github.com/devRauLuis/prueba-devsu.git`
Navega al directorio: `cd prueba-devsu`
Instala las dependencias: `npm install`
Inicia el servidor de desarrollo: `npm start`

## Pruebas

Para ejecutar las pruebas, usa el comando: npm test

## Contribución

Las solicitudes de pull son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir lo que te gustaría cambiar.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
