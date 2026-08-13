//19. Média + situação

function calcularMedia(nota1, nota2) {
    return ((nota1 + nota2) / 2);
}

function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let media = calcularMedia(10, 9);
let situacao = verificarSituacao(media);

console.log(`Média: ${media}`);
console.log(`Situação: ${situacao}`);
