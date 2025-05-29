const mensagem = `Desde que você chegou, minha vida mudou completamente.

Quando vi pela primeira vez aquele rostinho tão pequenininho e tão frágil, eu
soube que você seria minha maior paixão e o motivo do meu viver.

As pessoas sempre me falaram do quão incrível e enorme é o amor de mãe, e eu sempre duvidei. 
Pensava comigo mesma: como pode alguém amar mais que a própria vida um serzinho que mal nasceu?

Eu pensava que não era possível eu sentir esse amor, porém tudo mudou quando você nasceu. 
Hoje, você é tudo para mim: uma das coisas mais preciosas que eu tenho.

Filho, eu te amo e obrigada por existir e fazer parte da minha vida.

Talvez hoje você ainda não entenda, mas espero que um dia você saiba de pelo menos metade do meu amor por você. ❤️`;

const textoElemento = document.getElementById('mensagemTexto');

let index = 0;

function escreverLetraPorLetra() {
    if (index < mensagem.length) {
        textoElemento.textContent += mensagem.charAt(index);
        index++;
        setTimeout(escreverLetraPorLetra, 50);
    }
}

escreverLetraPorLetra();