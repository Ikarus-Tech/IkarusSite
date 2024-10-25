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

// Seleciona os elementos #qos-item1 e #qos-item2
const item1 = document.getElementById('qos-item1');
const item2 = document.getElementById('qos-item2');

// Adiciona o evento de mouseover para o item 2
item2.addEventListener('mouseover', function() {
    // Diminui a opacidade do item 1 quando o mouse estiver sobre o item 2
    item1.style.opacity = '0.4';
});

// Adiciona o evento de mouseout para restaurar a opacidade do item 1
item2.addEventListener('mouseout', function() {
    // Restaura a opacidade original do item 1 quando o mouse sair do item 2
    item1.style.opacity = '1';
});


