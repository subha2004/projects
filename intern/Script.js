document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const cardText = this.querySelector('.card-text');
            if (cardText) {
                cardText.style.display = cardText.style.display === 'none' || cardText.style.display === '' ? 'block' : 'none';
            }
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Smooth scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        const position = currentIndex * -100 / totalItems;
        carouselInner.style.transform = `translateX(${position}%)`;
    }

    // Automatically advance slides every 4 seconds
    setInterval(nextSlide, 4000);
});


