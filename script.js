const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha-botao');
const forcaSenha = querySelector('.forca');
botoes[0].onclick = diminuiTamanho
botoes[1].onclick = aumentaTamanho
function diminuiTamanho(){
    if (tamanhoSenha >1){
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function diminuiTamanho(){
    if (tamanhoSenha <20){
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const camposSenha = document.querySelector('#campo-senha');