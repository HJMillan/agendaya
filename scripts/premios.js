// Función para mostrar el modal cuando se intercambia una recompensa
function intercambiarRecompensa(producto) {
    const modal = document.getElementById('modal');
    const mensajeModal = document.getElementById('mensaje-modal');
    
    mensajeModal.textContent = `¡Has intercambiado tus puntos por ${producto}!`;
    modal.style.display = 'flex';

    // Ocultar modal después de 3 segundos
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}
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