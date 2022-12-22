const slides = document.querySelectorAll('.gallery__slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;




const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);