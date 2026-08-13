//16. Calcular desconto

function calcularDesconto(preco, percentual) {
    let valorDesconto = preco * percentual / 100;
    return (preco - valorDesconto);
}

console.log(`Preço com desconto: R$${calcularDesconto(200, 10)},00`);
