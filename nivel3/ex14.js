//14. Aprovação do aluno

function verificarAprovacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarAprovacao(8));
