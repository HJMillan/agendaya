// Carrusel
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;
const totalImages = images.length;

// Función para mover el carrusel automáticamente
function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reiniciar cuando llegue al final
    }

    // Calcular el ancho de la imagen actual
    const imageWidth = window.innerWidth <= 768 ? 300 : 1000;
    carouselSlide.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Configurar el intervalo para pasar automáticamente cada 3 segundos (3000ms)
setInterval(moveCarousel, 3000);

// Función para cambiar imágenes según el tamaño de la pantalla
function cambiarImagenes() {
  if (window.innerWidth <= 768) {
    document.getElementById('img1').src = 'img/banner_01_300x300.jpeg';
    document.getElementById('img2').src = 'img/banner_02_300x300.jpeg';
    document.getElementById('img3').src = 'img/banner_03_300x300.jpeg';
    document.getElementById('img4').src = 'img/banner_04_300x300.jpeg';
  } else {
    document.getElementById('img1').src = 'img/banner_01.jpg';
    document.getElementById('img2').src = 'img/banner_02.jpg';
    document.getElementById('img3').src = 'img/banner_03.jpg';
    document.getElementById('img4').src = 'img/banner_04.jpg';
  }
}

// Cambiar imágenes al cargar la página y al redimensionar
window.addEventListener('resize', cambiarImagenes);
window.addEventListener('load', cambiarImagenes);
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

//notificaciones
// Obtener elementos
const notification = document.getElementById("notification");
const btnSi = document.querySelector(".btn-si");
const btnNo = document.querySelector(".btn-no");

// Mostrar notificación al cargar la página
window.addEventListener('load', function() {
    notification.classList.add('visible'); // Muestra la notificación
});

// Cerrar la notificación al hacer clic en los botones
btnSi.onclick = function() {
    alert("Gracias por aceptar!");
    notification.classList.remove('visible'); // Oculta la notificación
};

btnNo.onclick = function() {
    notification.classList.remove('visible'); // Oculta la notificación
};
