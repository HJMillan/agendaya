document.addEventListener('DOMContentLoaded', function () {
    const collapsibleTitles = document.querySelectorAll('.collapsible-title');

    collapsibleTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Cerrar cualquier contenido que ya esté abierto
            document.querySelectorAll('.collapsible-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null; // Colapsar los demás
                }
            });

            // Expandir o colapsar el contenido actual
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Colapsar
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'; // Expandir
            }
        });
    });
});
