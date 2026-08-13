//20. Sistema de compra

function calcularSubtotal(preco, quantidade) {
    return (preco * quantidade);
}

function calcularDesconto(subtotal, percentual) {
    return (subtotal * percentual / 100);
}

function calcularTotal(subtotal, desconto) {
    return (subtotal - desconto);
}

let subtotal = calcularSubtotal(10, 5);
let desconto = calcularDesconto(subtotal, 10);
let total = calcularTotal(subtotal, desconto);

console.log(`Subtotal: R$${subtotal},00`);
console.log(`Desconto: R$${desconto},00`);
console.log(`Total: R$${total},00`);
