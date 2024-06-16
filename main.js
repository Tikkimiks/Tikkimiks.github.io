let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.six-block');
    const totalSlides = slides.length;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;

    currentIndex = (currentIndex + 1) % (totalSlides - slidesToShow + 1);

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * currentIndex}%)`;
    });

    updateCounter(currentIndex + slidesToShow, totalSlides);
}

function showPrevSlide() {
    const slides = document.querySelectorAll('.six-block');
    const totalSlides = slides.length;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;

    currentIndex = (currentIndex - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1);

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * currentIndex}%)`;
    });

    updateCounter(currentIndex + slidesToShow, totalSlides);
}

function updateCounter(current, total) {
    document.querySelectorAll('.carouselCounter').forEach(counter => {
        counter.innerText = `${current} / ${total}`;
    });
}

document.querySelectorAll('.nextSlide').forEach(button => button.addEventListener('click', showNextSlide));
document.querySelectorAll('.prevSlide').forEach(button => button.addEventListener('click', showPrevSlide));

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.six-block');
    const totalSlides = slides.length;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    currentIndex = slidesToShow === 1 ? 0 : 0;
    updateCounter(currentIndex + slidesToShow, totalSlides);
});

setInterval(showNextSlide, 4000);


document.addEventListener('DOMContentLoaded', function () {
    const blocks = document.querySelectorAll('.fifty .block');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const dots = document.querySelectorAll('.navigation .dot');
    let currentIndex = 0;

    function showBlocks(index) {
        blocks.forEach((block, i) => {
            block.classList.remove('active');
        });

        switch (index) {
            case 0:
                blocks[0].classList.add('active');
                blocks[1].classList.add('active');
                break;
            case 1:
                blocks[2].classList.add('active');
                break;
            case 2:
                blocks[3].classList.add('active');
                blocks[4].classList.add('active');
                break;
            case 3:
                blocks[5].classList.add('active');
                break;
            case 4:
                blocks[6].classList.add('active');
                break;
        }
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === 4;

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
        });
        prevButton.classList.toggle('disabled', currentIndex === 0);
        nextButton.classList.toggle('disabled', currentIndex === 4)
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            showBlocks(currentIndex);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < 4) {
            currentIndex++;
            showBlocks(currentIndex);
            updateButtons();
        }
    });

    // Инициализация
    showBlocks(currentIndex);
    updateButtons();
});
