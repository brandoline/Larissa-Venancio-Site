const btnMenu = document.querySelector(".hamburguer");
const navMobile = document.querySelector(".mobile-nav");
const perguntas = document.querySelectorAll(".pergunta-resposta");

btnMenu.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
});

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.querySelector('.resposta');
        const fechar = pergunta.querySelector('.fechar');
        const estaAberta = resposta.classList.contains('aberta');

        fechar.classList.toggle('rotate45');
        resposta.classList.toggle('aberta');

        if (!estaAberta) {
            resposta.style.maxHeight = resposta.scrollHeight + 'px';
        } else {
            resposta.style.maxHeight = null;
        }
    });
});