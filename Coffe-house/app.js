// Получаем элементы слайдера
const slider = document.querySelector('.image');
const btnL = document.querySelector('.btn-left');
const btnR = document.querySelector('.btn-right');
const Hamb = document.querySelector('.Hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const slides = Array.from(slider.querySelectorAll('.slide-elem'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
btnL.addEventListener('click', showPreviousSlide);
btnR.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}


//Поворот палочек в меню
Hamb.addEventListener('click', () => {
  line1.classList.toggle('burger-line1'),
  line2.classList.toggle('burger-line2');
});



// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
//Функция для плавного пролистывания


// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

window.addEventListener('load', () => {
  gsap.from('.title', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out'
  });

  gsap.from('.slide-elem', {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.3,
    ease: 'power2.out'
  });

  gsap.to('.icon-float', {
    rotation: 360,
    duration: 4,
    repeat: -1,
    ease: 'linear'
  });
});