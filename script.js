const btnMenu = document.querySelector(".hamburguer");
const navMobile = document.querySelector(".mobile-nav");
const perguntas = document.querySelectorAll(".pergunta-resposta");

btnMenu.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
})

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.querySelector('.resposta');

        resposta.classList.toggle('hidden');
    })
})