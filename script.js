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
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = ' 0123456789';
const simbolos = '!@%*?';
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
     if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
     if (checkbox[2].checked){
        alfabeto = alfabeto + letrasNumeros;
    }
     if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i ++){
        let numeroAleatorio = Math.random ()* alfabeto.length;
        numeroaleatorio = Math.floor ( numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove('fraca','media','forte')
    if(entropia >57)
}