let button = document.getElementById('button');

function resolverEx19() {
    let salario = parseFloat(document.getElementById('inputSalario').value);
    
    let salarioFinal, percentual;
    
    if (salario <= 999){
        salarioFinal = salario * 1.2;
        percentual = 20;
    } else if (salario <= 2999) {
        salarioFinal = salario * 1.15;
        percentual = 15;
    } else if (salario <= 7999) {
        salarioFinal = salario * 1.1;
        percentual = 10;
    } else {
        salarioFinal = salario * 1.05;
        percentual = 5;
    }
    
    let aumento = salarioFinal - salario;
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite o salario da pessoa: ${salario}\nNovo salário = ${salarioFinal.toFixed(2)}\nAumento = R$${aumento.toFixed(2)}\nPorcentagem = ${percentual} %\n\n`
}

button.addEventListener('click', resolverEx19)
