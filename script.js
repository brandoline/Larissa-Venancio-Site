const btnMenu = document.querySelector(".hamburguer");
const navMobile = document.querySelector(".mobile-nav");
const perguntas = document.querySelectorAll(".pergunta-resposta");
const navItens = document.querySelectorAll("#navMobileItem")

btnMenu.addEventListener('click', () => {
    navMobile.classList.toggle('mostrar');
});

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.querySelector('.resposta');
        const fechar = pergunta.querySelector('.fechar');
        const estaAberta = resposta.classList.contains('aberta');

        pergunta.classList.toggle('shadow');
        fechar.classList.toggle('rotate45');
        resposta.classList.toggle('aberta');

        if (!estaAberta) {
            resposta.style.maxHeight = resposta.scrollHeight + 'px';
        } else {
            resposta.style.maxHeight = null;
        }
    });
});

navItens.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navMobile.classList.remove('mostrar');
    })
})