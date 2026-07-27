const btnMenu = document.querySelector(".hamburguer");
const navMobile = document.querySelector(".mobile-nav");
const pergunta = document.querySelector(".pergunta-resposta");
const resposta = document.querySelector(".resposta");

btnMenu.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
})