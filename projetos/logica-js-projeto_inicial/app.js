alert('Bem vindos ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('escolha um número entre 1 e 10');

if (chute == numeroSecreto) {

    alert('Parabéns você descobriu o número secreto!');
} else {
    alert('você errou recarrege a página e tente novamente!')
}