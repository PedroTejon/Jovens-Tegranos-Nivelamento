let button = document.getElementById('button');

function resolverEx13() {
    let qntdMinutos = parseInt(document.getElementById('inputQntdMinutos').value);
    
    let valor = (50 + (qntdMinutos > 100 ? (qntdMinutos - 100) * 2 : 0)).toFixed(2);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite a quantidade de minutos: ${qntdMinutos}\nValor a pagar: R$${valor}\n\n`
}

button.addEventListener('click', resolverEx13)
