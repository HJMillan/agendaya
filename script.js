// Hamburguesa
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

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

//footer desplegable en telefono
document.addEventListener("DOMContentLoaded", function() {
  var collapsibleTitles = document.querySelectorAll(".collapsible-title");

  collapsibleTitles.forEach(function(title) {
      title.addEventListener("click", function() {
          // Activa o desactiva el contenido
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      });
  });
});
