const btnPrev = document.querySelector(".slide-prev"),
    btnNext = document.querySelector(".slide-next"),
    dots = document.querySelectorAll(".dot"),
    titles = document.querySelectorAll(".title"),
    slides = document.querySelectorAll(".slide");

let index = 0;

const activeDot = (n) => {
    dots.forEach((dot) => {
        dot.classList.remove("dot_active");
    });
    dots[n].classList.add("dot_active");
};
const activeTitle = (n) => {
    titles.forEach((title) => {
        title.classList.remove("title_active");
    });
    titles[n].classList.add("title_active");
};

const activeSlide = (n) => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[n].classList.add("active");
};

const currentSlide = (ind) => {
    activeSlide(ind);
    activeTitle(ind);
    activeDot(ind);
};

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        currentSlide(index);
    } else {
        index--;
        currentSlide(index);
    }
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        currentSlide(index);
    } else {
        index++;
        currentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        currentSlide(index);
    });
});

btnPrev.addEventListener("click", prevSlide);
btnNext.addEventListener("click", nextSlide);