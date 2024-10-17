function eliminarGrupo(idGrupo) {
    const grupo = document.getElementById(idGrupo);
    grupo.remove();
}

function modificarGrupo(idGrupo) {
    const grupo = document.getElementById(idGrupo);
    const nombreGrupo = prompt('Modificar nombre del grupo:', grupo.querySelector('h3').textContent.replace('Grupo: ', ''));
    const descripcionGrupo = prompt('Modificar descripción del grupo:', grupo.querySelector('p').textContent);

    if (nombreGrupo && descripcionGrupo) {
        grupo.querySelector('h3').textContent = `Grupo: ${nombreGrupo}`;
        grupo.querySelector('p').textContent = descripcionGrupo;
    }
}

document.getElementById('grupo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreGrupo = document.getElementById('nombre-grupo').value;
    const descripcionGrupo = document.getElementById('descripcion-grupo').value;

    if (nombreGrupo && descripcionGrupo) {
        const nuevoGrupo = document.createElement('section');
        nuevoGrupo.classList.add('grupo');
        nuevoGrupo.innerHTML = `
            <h3>Grupo: ${nombreGrupo}</h3>
            <p>${descripcionGrupo}</p>
            <button class="btn-modificar" onclick="modificarGrupo('${nombreGrupo}')">Modificar</button>
            <button class="btn-eliminar" onclick="eliminarGrupo('${nombreGrupo}')">Eliminar</button>
        `;

        document.getElementById('lista-grupos').appendChild(nuevoGrupo);

        // Limpiar el formulario
        document.getElementById('grupo-form').reset();
    }
});

// Función para cargar el sidebar desde un archivo externo
function loadSidebar() {
    fetch('sidevar.html')  // Asegúrate de que este sea el nombre correcto
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el sidebar');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;

            // Llama a la función que inicializa los eventos del sidebar
            initializeSidebar(); // Aquí se inicializan los eventos
        })
        .catch(error => {
            console.error('Hubo un problema con la carga del sidebar:', error);
        });
}

// Inicializa los eventos del sidebar
function initializeSidebar() {
    const toggleButton = document.querySelector('.toggle'); // Asegúrate de que este botón exista
    const sidebar = document.querySelector('nav.sidebar'); // Selecciona el sidebar

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('close'); // Alterna la clase close
        });
    }
}
// Inicializa el desplazamiento a los centros culturales
function initializeScroll() {
    const links = document.querySelectorAll('#sidebar-container a'); // Selecciona los enlaces en el sidebar

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const targetId = this.getAttribute('href'); // Obtener el ID de destino
            const targetElement = document.querySelector(targetId); // Seleccionar el elemento de destino

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el elemento
            }
        });
    });
}
// Llama a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', loadSidebar);
// Función para cargar el footer desde footer.html
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}

// Llamar a la función para cargar el footer al cargar la página
window.onload = loadFooter;
