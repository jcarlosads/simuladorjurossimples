// Função para calcular juros simples
function calcularJurosSimples(capital, taxa, tempo) {
    let juros = (capital * taxa * tempo) / 100;
    let valorFinal = capital + juros;
    return valorFinal;
}

// Capturar entradas do usuário
let capitalInicial = parseFloat(prompt("Informe o capital inicial:"));
let taxaJuros = parseFloat(prompt("Informe a taxa de juros (%):"));
let tempoAplicacao = parseInt(prompt("Informe o tempo de aplicação (em anos):"));

// Processar o cálculo
let valorFinal = calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao);

// Exibir o resultado
console.log(`O valor final do investimento após ${tempoAplicacao} anos é R$${valorFinal.toFixed(2)}`);
alert(`O valor final do investimento após ${tempoAplicacao} anos é R$${valorFinal.toFixed(2)}`);
