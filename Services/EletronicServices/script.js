// Seleciona os cards e elementos do popup
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup_title');
const popupDescription = document.getElementById('popup_description');
const popupLink = document.getElementById('popup_link');
const popupImage = document.getElementById('popup_image');
const closeBtn = document.querySelector('.popup .close');

// Adiciona evento de clique aos cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Obtém os dados dos atributos data-* do card
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const link = card.getAttribute('data-link');
    const imageSrc = card.querySelector('img').src; // Obtém o src da imagem do card

    // Atualiza o conteúdo do popup
    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupLink.href = link;
    popupImage.src = imageSrc;

    // Mostra o popup
    popup.style.display = 'flex';
  });
});

// Adiciona evento para fechar o popup ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fecha o popup ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

