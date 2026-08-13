//17. Calcular salário com bônus

function calcularSalario(salario, bonus) {
    let valorBonus = salario * bonus / 100;
    return (salario + valorBonus);
}

console.log(`Preço com bônus: R$${calcularSalario(3000, 10)},00`);
