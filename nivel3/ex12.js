//12. Número positivo ou negativo

function verificarNumero(numero) {
    if (numero > 1) {
        return "Positivo";
    } else if (numero === 0) {
        return "Zero";
    } else {
        return "Negativo";
    }
}

console.log(verificarNumero(-19));
