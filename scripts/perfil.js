document.addEventListener("DOMContentLoaded", function () {
    // Cargar el sidebar y el footer
    loadSidebar();
    loadFooter();
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
            initializeSidebar(); // Inicializa eventos después de cargar
        })
        .catch(error => {
            console.error('Hubo un problema con la carga del sidebar:', error);
        });
}

// Inicializa los eventos del sidebar
function initializeSidebar() {
    // Manejo del colapso de secciones
    const toggleSections = document.querySelectorAll('.toggle-section');
    toggleSections.forEach(section => {
        section.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        });
    });

    // Manejo del botón del sidebar
    const toggleButton = document.querySelector('.toggle'); // Asegúrate de que este botón exista
    const sidebar = document.querySelector('nav.sidebar'); // Selecciona el sidebar

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('close'); // Alterna la clase close
        });
    }

    // Inicializa el desplazamiento a los centros culturales
    initializeScroll();
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

// Función para cargar el footer desde footer.html
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            initializeModals(); // Inicializa los modales después de cargar el footer
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}

// Inicializa los eventos para los modales
function initializeModals() {
    // Abrir modal para cerrar sesión
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.onclick = function () {
            const logoutModal = document.getElementById("logout-modal");
            logoutModal.style.display = "flex"; // Muestra el modal

            // Redirigir a index después de 1 segundo
            setTimeout(() => {
                logoutModal.style.display = "none"; // Opcionalmente puedes ocultar el modal
                window.location.href = "index.html"; // Redirigir a index
            }, 1000); // Esperar 1 segundo antes de redirigir
        };
    }

    // Abrir modal para eliminar perfil
    const deleteProfileButton = document.getElementById("delete-profile-button");
    if (deleteProfileButton) {
        deleteProfileButton.onclick = function () {
            document.getElementById("delete-modal").style.display = "flex";
        };
    }

    // Cerrar los modales al hacer clic en la 'X'
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.onclick = function () {
            button.closest('.modal').style.display = "none"; // Cerrar el modal correcto
        }
    });

    // Cancelar eliminación de perfil
    const cancelDeleteButton = document.getElementById("cancel-delete");
    if (cancelDeleteButton) {
        cancelDeleteButton.onclick = function () {
            document.getElementById("delete-modal").style.display = "none";
        };
    }

    // Confirmar eliminación de perfil
    const confirmDeleteButton = document.getElementById("confirm-delete");
    if (confirmDeleteButton) {
        confirmDeleteButton.onclick = function () {
            document.getElementById("delete-modal").style.display = "none";
            document.getElementById("deleting-modal").style.display = "flex"; // Mostrar modal de eliminación
            // Simulamos un retraso antes de redirigir
            setTimeout(() => {
                window.location.href = "index.html"; // Redirigir a index
            }, 1000); // Esperar 1 segundo antes de redirigir
        };
    }
}
