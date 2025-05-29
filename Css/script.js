const mensagem = `Meu filho, eu te amo!

Desde que você chegou, minha vida mudou completamente.
Você é a razão do meu sorriso e da minha felicidade.
Te amo infinitamente!`;

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