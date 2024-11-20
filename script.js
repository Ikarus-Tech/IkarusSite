document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector(".hero-image img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroImage.style.animationPlayState = "running";
            } else {
                heroImage.style.animationPlayState = "paused";
            }
        });
    });

    observer.observe(heroImage);
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu')

// Função para alternar o menu dropdown
const dropdownMenus = document.querySelectorAll('.dropdown__item'); // Seleciona todos os itens de menu dropdown

dropdownMenus.forEach(dropdown => {
    const arrow = dropdown.querySelector('.dropdown__arrow');
    const menu = dropdown.querySelector('.dropdown__menu');

    dropdown.addEventListener('click', () => {
        // Alterna a visibilidade do menu
        menu.classList.toggle('show-dropdown');
        
        // Alterna a rotação da seta
        arrow.classList.toggle('rotate-arrow');
    });
});


// Seleciona o elemento pai e os itens de imagem
const qosImages = document.querySelector('.qos-images');
const qItem1 = document.getElementById('qos-item1');
const qItem2 = document.getElementById('qos-item2');

// Variáveis para armazenar a posição inicial e final do toque
let startX = 0;
let endX = 0;

// Adiciona o evento touchstart para detectar o início do swipe
qosImages.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

// Adiciona o evento touchmove para rastrear o movimento horizontal
qosImages.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

// Adiciona o evento touchend para verificar a direção do swipe
qosImages.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        // Drag para a esquerda - `qItem2` passa para cima
        qItem2.style.zIndex = '3';
        qItem1.style.zIndex = '1';
        qItem2.style.transform = 'scale(1.2) translateX(-20%)';
        qItem2.style.opacity = '1';
        qItem1.style.transform = 'scale(1) translateX(0)';
        qItem1.style.opacity = '0.6';
    } else if (endX > startX + 50) {
        // Drag para a direita - `qItem1` passa para cima
        qItem1.style.zIndex = '3';
        qItem2.style.zIndex = '1';
        qItem1.style.transform = 'scale(1.2) translateX(20%)';
        qItem1.style.opacity = '1';
        qItem2.style.transform = 'scale(1) translateX(-20%)';
        qItem2.style.opacity = '0.6';
    }

    // Reseta as posições para o próximo drag
    startX = 0;
    endX = 0;
});





