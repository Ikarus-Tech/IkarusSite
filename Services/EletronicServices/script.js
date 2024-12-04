// Seleciona os elementos necessários
const extraContainer = document.querySelector('.extra_container');
const prevButton = document.querySelector('.slider_arrow.prev');
const nextButton = document.querySelector('.slider_arrow.next');

// Adiciona eventos de clique às setas
prevButton.addEventListener('click', () => {
  extraContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  extraContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

// Mantém a funcionalidade do popup
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup_title');
const popupDescription = document.getElementById('popup_description');
const popupLink = document.getElementById('popup_link');
const popupImage = document.getElementById('popup_image');
const closeBtn = document.querySelector('.popup .close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const link = card.getAttribute('data-link');
    const imageSrc = card.querySelector('img').src;

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupLink.href = link;
    popupImage.src = imageSrc;

    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
