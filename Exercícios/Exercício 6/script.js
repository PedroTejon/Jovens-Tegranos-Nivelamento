let button = document.getElementById('button');

function resolverEx6() {
    let nome = document.getElementById('inputNome').value;
    let valorHora = parseFloat(document.getElementById('inputValorHora').value);
    let horasTrabalhadas = parseInt(document.getElementById('inputHorasTrabalhadas').value);
    
    let pagamentoTotal = (valorHora * horasTrabalhadas).toFixed(2);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Nome: ${nome}\nValor por hora: ${valorHora}\nHoras trabalhadas: ${horasTrabalhadas}\nO pagamento para ${nome} deve ser ${pagamentoTotal}\n\n`
}

button.addEventListener('click', resolverEx6)
