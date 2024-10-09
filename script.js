document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navPopup = document.getElementById('nav-popup');

    menuToggle.addEventListener('click', () => {
        navPopup.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navPopup.classList.remove('show');
        }
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto slide
setInterval(function() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slides").length) { slideIndex = 1; }
    showSlides(slideIndex);
}, 5000); // Muda o slide a cada 5 segundos
