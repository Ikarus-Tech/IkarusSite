// Selecionar os botões do toggle e os elementos de preço
const monthlyButton = document.querySelector(".monthly");
const yearlyButton = document.querySelector(".yearly");
const priceElements = document.querySelectorAll(".price_main");
const priceMonthText = document.querySelectorAll(".price_month");

// Função para alternar preços
function togglePrices(isMonthly) {
  priceElements.forEach((priceElement) => {
    const monthlyPrice = priceElement.getAttribute("data-monthly");
    const yearlyPrice = priceElement.getAttribute("data-yearly");

    if (isMonthly) {
      priceElement.textContent = monthlyPrice;
      priceMonthText.forEach((text) => (text.textContent = "/mês"));
    } else {
      priceElement.textContent = yearlyPrice;
      priceMonthText.forEach((text) => (text.textContent = "/ano"));
    }
  });
}

// Eventos de clique para alternar entre mensal e anual
monthlyButton.addEventListener("click", () => {
  togglePrices(true);
  monthlyButton.classList.add("active");
  yearlyButton.classList.remove("active");
});

yearlyButton.addEventListener("click", () => {
  togglePrices(false);
  yearlyButton.classList.add("active");
  monthlyButton.classList.remove("active");
});
