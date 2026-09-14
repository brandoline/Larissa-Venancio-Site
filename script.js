const btnMenu = document.querySelector(".hamburguer");
const navMobile = document.querySelector(".mobile-nav");
const perguntas = document.querySelectorAll(".pergunta-resposta");
const navItens = document.querySelectorAll(".navMobileItem");

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
    navItem.addEventListener('click', (e) => {
        const href = navItem.getAttribute('href');

        // só intercepta se for um link de âncora (#algumaCoisa)
        if (href && href.startsWith('#')) {
            e.preventDefault();

            navMobile.classList.remove('mostrar');

            const destino = document.querySelector(href);
            if (destino) {
                // espera a animação de fechamento do menu terminar antes de rolar
                setTimeout(() => {
                    destino.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        } else {
            // link externo (ex: WhatsApp) — só fecha o menu, comportamento padrão segue
            navMobile.classList.remove('mostrar');
        }
    });
});
