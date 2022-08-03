
let genero;
let nombre;
genero= window.prompt ("De acuerdo a la identidad de genero ¿Se considera mujer/varon/no binario? (escribir en minuscula)")
nombre= window.prompt ("¿Como te llamas?")

if (genero== "varon" || genero== "Varon") {
  document.querySelector("#saludo").innerHTML =( "Bienvenido " + nombre); 
} else if (genero== "mujer" || genero== "Mujer") {
  document.querySelector("#saludo").innerHTML =( "Bienvenida " + nombre);
} else {
  document.querySelector("#saludo").innerHTML =( "Bienvenide " + nombre);
}

//carrusel
const slides = document.querySelectorAll(".imagen");
slides.forEach((imagen, indx) => {
    imagen.style.transform = `translateX(${indx * 100}%)`;
  });

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector (".btn-prev");

prevSlide.addEventListener ("click", function(){
    if (curSlide== 0) {
        curSlide= maxSlide;
    } else {
        curSlide--;
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    }); 


   




