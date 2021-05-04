const carousel = document.querySelector('.carousel__main-wrapper');
const slides = Array.from(carousel.children);
const nextButton = document.querySelector('.carousel__button-next');
const prevButton = document.querySelector('carousel__button-prev');



// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);

// nextButton.addEventListener('click', e => {
//     console.log('awit');
// });


function nextSlide() {
    slides[0].classList.add('is-hidden');
    slides[1].classList.remove('is-hidden');
    // prevButton.classList.add('is-hidden');
}

function prevSlide() {
    slides[0].classList.remove('is-hidden');
    slides[1].classList.add('is-hidden');
    console.log('awit')
}