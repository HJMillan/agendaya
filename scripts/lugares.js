// Selecciona todos los encabezados h2 dentro de la clase 'mapa'
const headers = document.querySelectorAll('.mapa h2');

// Recorre cada encabezado y agrega un evento de clic
headers.forEach(header => {
    header.addEventListener('click', function () {
        const content = header.nextElementSibling; // El contenido que sigue al encabezado
        const allContents = document.querySelectorAll('.content'); // Todos los elementos con clase 'content'

        // Cierra todos los contenidos excepto el que fue clicado
        allContents.forEach(c => {
            if (c !== content) {
                c.classList.remove('visible');
            }
        });

        // Alterna la visibilidad del contenido clicado
        content.classList.toggle('visible');
    });
});
