document.querySelector('.btn-menu').addEventListener('click', () => {
  document.querySelector('.btn-menu').classList.add('active')
});

const button = document.querySelector('.img-menu');
const modalEl = document.querySelector('.mod');
const modalReg = document.querySelector('.modReg');
const modalBas = document.querySelector('.modBasket');
const openBas = document.querySelector('.btn-menu-basket');
const close = document.querySelector('.modal-btn-close');
const openReg = document.querySelector('.modal-btn-add');
const closeReg = document.querySelector('.closeModalReg');
const closeBas = document.querySelector('.closeModalBas');

    modalEl.style.cssText = `
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease;`
;

const closeModal = event =>{
  const target = event.target;

  if(target == close){
    modalEl.style.visibility = "hidden";
    modalEl.style.opacity = 0;
  }
}

const openModal = () =>{
  modalEl.style.visibility = "visible";
  modalEl.style.opacity = 1;
};

modalReg.style.cssText = `
display: block;
visibility: hidden;
opacity: 0;
transition: all 300ms ease;`
;

const closeModalReg = event =>{
const target = event.target;

if(target == closeReg){
modalReg.style.visibility = "hidden";
modalReg.style.opacity = 0;
}
}

const openModalReg = () =>{
modalReg.style.visibility = "visible";
modalReg.style.opacity = 1;
};


const openBasket = () =>{
  modalBas.style.visibility = "visible";
  modalBas.style.opacity = 1;
};

modalBas.style.cssText = `
display: block;
visibility: hidden;
opacity: 0;
transition: all 300ms ease;`
;

const closeModalBasket = event =>{
  const target = event.target;
  
  if(target == closeBas){
  modalBas.style.visibility = "hidden";
  modalBas.style.opacity = 0;
  }
  }

openReg.addEventListener('click', openModalReg);
openBas.addEventListener('click', openBasket);
openReg.addEventListener('click', closeModal);
closeReg.addEventListener('click', closeModalReg);
closeBas.addEventListener('click', closeModalBasket);
button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'm') {
      gsap.from('.card-menu', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  });
});