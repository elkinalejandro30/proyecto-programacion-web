# AndyGusteau


## Descripción del proyecto


AndyGusteau es un sitio web académico para un restaurante ficticio de cocina de autor. El proyecto fue desarrollado principalmente con HTML, CSS y JavaScript, sin un backend conectado.


La página representa el **frontend** del restaurante: muestra información, presenta el menú, permite diligenciar formularios y responde visualmente a las acciones del usuario. Los datos de los formularios se validan en el navegador, pero no se guardan en una base de datos porque este ejercicio funciona como un sitio estático.


## Objetivo académico


El proyecto aplica la línea de profundización **Línea A: Formularios y peticiones, Temática 3**.


La actividad se desarrolló en pareja y por eso incluye:

## Mapa de responsabilidades del codigo

- `index.html`: presenta el restaurante, la navegacion, el contenido multimedia y la informacion institucional.
- `menu.html`: organiza la carta, las imagenes de los platos y la solicitud de eventos especiales.
- `reservas.html`: contiene el formulario de reserva y sus restricciones de entrada.
- `estilos.css`: concentra la identidad visual, la composicion responsive y los estados de los componentes.
- `script.js`: valida fechas y formularios, muestra feedback y evita el envio local de datos.
- `imagenes/`: almacena los recursos visuales y el video utilizados por las paginas.

Esta separacion permite identificar donde se define la estructura, donde se presenta la interfaz y donde se controla el comportamiento interactivo del proyecto.# AndyGusteau

## Descripción del proyecto

AndyGusteau es un sitio web académico para un restaurante ficticio de cocina de autor. El proyecto fue desarrollado principalmente con HTML, CSS y JavaScript, sin un backend conectado.

La página representa el **frontend** del restaurante: muestra información, presenta el menú, permite diligenciar formularios y responde visualmente a las acciones del usuario. Los datos de los formularios se validan en el navegador, pero no se guardan en una base de datos porque este ejercicio funciona como un sitio estático.

## Objetivo académico

El proyecto aplica la línea de profundización **Línea A: Formularios y peticiones, Temática 3**.

La actividad se desarrolló en pareja y por eso incluye:

- Tres páginas HTML enlazadas.
- Un formulario de reserva.
- Un segundo formulario para solicitar información sobre eventos especiales.
- Validaciones HTML5 y JavaScript.
- Explicación conceptual de los métodos GET, POST, PUT y DELETE.
- Documentación de las secciones principales del código.

## Estructura del proyecto

```text
AndyGusteau/
├── index.html
├── menu.html
├── reservas.html
├── estilos.css
├── script.js
├── README.md
└── imagenes/
    ├── 0910.mp4
    ├── restaurante.jpg
    ├── ajoblanco de coco con tartar de gamba roja y caviar.jpg
    ├── Camarones al ajillo con champiñones.jpg
    ├── Steamed Cod with Peas and Lemon Verbena.jpg
    └── wagyu beef.jpg
```

## Cómo ejecutar el proyecto

El proyecto no necesita `npm install`, Node.js ni un servidor backend.

### Opción 1: abrir directamente

1. Abre la carpeta del proyecto en el explorador de archivos.
2. Haz doble clic en `index.html`.
3. Navega usando los enlaces **Inicio**, **Menú** y **Reservas**.

### Opción 2: usar Live Server en VS Code

1. Abre la carpeta en VS Code.
2. Instala la extensión **Live Server** si todavía no está instalada.
3. Haz clic derecho en `index.html`.
4. Selecciona **Open with Live Server**.

Live Server permite visualizar los cambios automáticamente en el navegador.

## Explicación de las páginas

### `index.html`

Es la página principal del restaurante. Contiene:

- Nombre y presentación de AndyGusteau.
- Encabezado principal con un elemento `<h1>`.
- Subencabezados `<h2>`.
- Menú de navegación hacia las tres páginas.
- Lista HTML de beneficios y servicios.
- Tabla HTML con horarios y dirección.
- Imagen principal del restaurante.
- Video local en formato MP4 mediante la etiqueta `<video>`.
- Explicación conceptual de frontend, backend y métodos HTTP.
- Pie de página.

El video se carga desde `imagenes/0910.mp4`, por lo que ya no depende de YouTube.

### `menu.html`

Es la carta digital del restaurante. Contiene:

- Cuatro platos con fotografías reales.
- Nombres y descripciones inspirados en una carta de alta cocina.
- Precios expresados en dólares estadounidenses.
- Lista HTML de platos.
- Tabla HTML de platos, categorías y precios.
- Imágenes con atributos `alt` descriptivos.
- Segundo formulario del proyecto, destinado a eventos especiales.

Los platos destacados son:

- Ajoblanco de Coco, Gamba Roja & Caviar.
- Camarones al Ajillo & Hongos Silvestres.
- Bacalao, Guisantes & Verbena de Limón.
- Wagyu Beef Grand Cru.

### `reservas.html`

Es la página para solicitar una mesa. Contiene el primer formulario obligatorio con:

- Nombre completo.
- Correo electrónico.
- Número de personas.
- Fecha.
- Hora.
- Tipo de reserva.
- Preferencias adicionales.
- Nota para el equipo.

El número de personas utiliza `min="1"` y `max="12"`, porque corresponde a una reserva normal. Para grupos grandes se utiliza el formulario de eventos, cuyo campo de invitados permite entre 1 y 80 personas.

## Formularios y validaciones

### Formulario de reserva

El formulario tiene más de cinco campos y utiliza diferentes tipos de entrada:

- `text`
- `email`
- `number`
- `date`
- `time`
- `checkbox`
- `select`

También usa validaciones HTML5 como:

- `required` para obligar a completar campos.
- `min` y `max` para limitar cantidades y horarios.
- `pattern` para validar el nombre.
- `maxlength` para limitar textos largos.
- `type` para exigir formatos correctos de correo, fecha, hora y número.

### Formulario de eventos

Este formulario tiene un propósito diferente al de reservas. Sirve para solicitar información sobre:

- Cumpleaños.
- Cenas empresariales.
- Eventos privados.

El campo de invitados acepta valores entre 1 y 80.

### Validación con JavaScript

El archivo `script.js` realiza estas tareas:

1. Espera a que el documento termine de cargar.
2. Detecta si existe el formulario de reservas o el formulario de eventos.
3. Configura como fecha mínima el día actual.
4. Comprueba la validación HTML5.
5. Verifica que la fecha elegida no sea anterior al día actual.
6. Muestra un mensaje visible de error si los datos son incorrectos.
7. Muestra un mensaje visible de confirmación si los datos son correctos.
8. Reinicia el formulario después de una confirmación local.

La información no se envía a un servidor real. La confirmación es una simulación del comportamiento del frontend.

## Frontend y backend

### Frontend

Es la parte que ve y utiliza el usuario. En este proyecto incluye:

- HTML para la estructura.
- CSS para el diseño visual y responsive.
- JavaScript para las validaciones y mensajes.
- Imágenes y video local.
- Formularios de reservas y eventos.

### Backend en un restaurante real

Un restaurante real necesitaría un backend para:

- Guardar reservas.
- Consultar disponibilidad de mesas.
- Administrar clientes.
- Gestionar platos y precios.
- Actualizar o cancelar reservas.
- Enviar correos de confirmación.
- Proteger la información almacenada.

Este proyecto no inventa un backend conectado. Por eso se clasifica como un sitio web estático con interacción en el navegador.

## Métodos HTTP que se pueden explicar

Estos métodos no están implementados contra una API, pero representan cómo funcionaría el sistema en una versión completa:

- **GET:** consultar el menú, los horarios o la disponibilidad de mesas.
- **POST:** crear una nueva reserva o enviar una solicitud de evento.
- **PUT:** modificar una reserva existente, por ejemplo cambiar fecha o número de personas.
- **DELETE:** cancelar o eliminar una reserva existente.

## SEO y accesibilidad

Cada página incluye:

- Un `<title>` descriptivo.
- Una etiqueta `<meta name="description">` relacionada con su contenido.
- Atributos `alt` en las imágenes.
- Títulos jerárquicos con `<h1>` y `<h2>`.
- Etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
- Etiquetas `label` relacionadas con sus campos mediante `for` e `id`.
- Mensajes de formulario con `aria-live` para comunicar resultados.

## Diseño visual

El diseño utiliza una identidad de restaurante contemporáneo y elegante:

- Paleta cálida con tonos crema, verde salvia y coral.
- Tipografía serif para títulos gastronómicos.
- Diseño responsive para computadores, tabletas y celulares.
- Tarjetas de platos con fotografías locales.
- Tablas y formularios legibles.
- Video horizontal con controles nativos del navegador.

## Guion sugerido para el video de presentación

### 1. Presentación

"Somos el equipo encargado de desarrollar AndyGusteau, un sitio web académico para un restaurante ficticio de cocina de autor. El proyecto está construido con HTML, CSS y JavaScript."

### 2. Página de inicio

Mostrar `index.html` y explicar:

- La identidad del restaurante.
- La navegación entre las tres páginas.
- La lista de servicios.
- La tabla de horarios.
- La imagen del restaurante.
- El video local incluido con HTML5.

### 3. Página del menú

Mostrar `menu.html` y explicar:

- Las tarjetas de platos.
- El uso de imágenes con `alt`.
- Los nombres y precios en dólares.
- La lista y tabla de precios.
- El formulario de eventos como requisito del trabajo en pareja.

### 4. Página de reservas

Mostrar `reservas.html` y explicar:

- Los campos del formulario.
- Los diferentes tipos de entrada.
- Los atributos `required`, `min`, `max`, `pattern` y `maxlength`.
- El mensaje de error cuando faltan datos.
- El mensaje de confirmación cuando los datos son válidos.

### 5. Explicación técnica

Explicar que:

- El proyecto actual es principalmente frontend.
- JavaScript valida los datos localmente.
- No existe una base de datos conectada.
- Un backend real podría usar GET, POST, PUT y DELETE.
- Un servidor podría guardar las reservas y enviar confirmaciones.

### 6. Cierre

"AndyGusteau cumple los requisitos de estructura, navegación, contenido, formularios, validaciones, multimedia, SEO y documentación. Como mejora futura se podría conectar el proyecto a un backend y una base de datos."

## Verificaciones realizadas

- Las tres páginas HTML existen.
- Las tres páginas están enlazadas.
- Cada página tiene estructura HTML completa y pie de página.
- El CSS externo está enlazado.
- El JavaScript externo está enlazado.
- Existen listas y tablas HTML.
- Las imágenes tienen `alt`.
- El video local existe y se reproduce mediante `<video>`.
- Existen dos formularios con propósitos diferentes.
- Las validaciones HTML5 están configuradas.
- La validación JavaScript muestra mensajes visibles.
- No quedan referencias a YouTube.
- El código JavaScript pasa la comprobación de sintaxis.
- El proyecto está publicado en GitHub con las ramas `master` y `ElkinAlejandro.001.web`.

## Publicación en GitHub

Repositorio:

```text
https://github.com/elkinalejandro30/proyecto-programacion-web
```

Rama académica:

```text
ElkinAlejandro.001.web
```

El video `imagenes/0910.mp4` se administra con Git LFS porque supera el límite de 100 MB de GitHub para archivos normales.
