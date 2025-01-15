// Lista de pacotes disponíveis
const packages = {
  "kit-4-cameras": "Kit de 4 Câmeras",
  "kit-8-cameras": "Kit de 8 Câmeras",
  "kit-16-cameras": "Kit de 16 Câmeras",
  "kit-32-cameras": "Kit de 32 Câmeras",

  "host-inicial": "Pacote Inicial de Hospedagem",
  "host-standard": "Pacote Standard de Hospedagem",
  "host-premium": "Pacote Premium de Hospedagem",

  "email-inicial": "Pacote Inicial de Criação de Emails Corporativos",
  "email-standard": "Pacote Standard de Criação de Emails Corporativos",
  "email-business": "Pacote Business de Criação de Emails Corporativos",
  "email-premium": "Pacote Premium de Criação de Emails Corporativos",

  "web-apolo": "Pacote Apolo",
  "web-poseidon": "Pacote Poseidon",
  "web-ikarus": "Pacote Ikarus",
  "web-zeus": "Pacote Zeus",

  "controle-acesso" : "Controle de Acesso",
  "alarmes" : "Instalação de Alarmes",
  "auto-gates": "Portões Automaticos",
  "eletric-fence" : "Cercas Eléctricas",
  "video-sec" : "Vídeo Vigilância"
};

// Função para obter o valor do parâmetro da URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Preencher o campo 'service' com o valor do parâmetro
window.onload = function () {
  const serviceParam = getQueryParam('service');
  const serviceCallParam = getQueryParam('service-call');
  const packageId = getQueryParam('package_id');

  if (serviceParam) {
    document.getElementById('service').value = serviceParam;
    // Adicionar campo de descrição do pacote, se houver o package_id
    if (packageId && packages[packageId]) {
      const select = document.getElementById('select-quote');

      // Criar um novo elemento de descrição do pacote
      const packageInfo = document.createElement('div');
      packageInfo.className = 'form-group';
      packageInfo.innerHTML = `
        <input type="text" name="package" id="package" value="${packages[packageId]}" readonly />
      `;

      // Inserir o novo campo logo após o campo 'name-call'
      select.parentNode.insertBefore(packageInfo, select.nextSibling);
    }
  }

  if (serviceCallParam) {
    document.getElementById('service-call').value = serviceCallParam;
    // Adicionar campo de descrição do pacote, se houver o package_id
    if (packageId && packages[packageId]) {
      const select = document.getElementById('select-call');

      // Criar um novo elemento de descrição do pacote
      const packageInfo = document.createElement('div');
      packageInfo.className = 'form-group';
      packageInfo.innerHTML = `
        <input type="text" name="package" id="package" value="${packages[packageId]}" readonly />
      `;

      // Inserir o novo campo logo após o campo 'name-call'
      select.parentNode.insertBefore(packageInfo, select.nextSibling);
    }
  }



};