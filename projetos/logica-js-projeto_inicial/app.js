
let valorMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);
alert('Bem vindos ao jogo do número secreto');

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt(`escolha um número entre 1 e ${valorMaximo}`);

    if (chute == numeroSecreto) {
        break;

    } else {
        if (numeroSecreto > chute) {
            alert (`O número secreto é maior que ${chute}`);
        } else {
            alert (`O número secreto é menor que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Parabéns você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Parabéns você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }