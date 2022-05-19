let button = document.getElementById('button');

function resolverEx14() {
    let precoUnit = parseFloat(document.getElementById('inputPrecoUnitario').value);
    let qntdComprada = parseInt(document.getElementById('inputQntdComprada').value);
    let dinheiroRecebido = parseFloat(document.getElementById('inputDinheiroRecebido').value);
    
    let gasto = precoUnit * qntdComprada
    let troco = dinheiroRecebido - gasto;
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Preço unitário do produto: ${precoUnit}\nQuantidade comprada: ${qntdComprada}\nDinheiro recebido: ${dinheiroRecebido}\n${gasto > dinheiroRecebido ? 'DINHEIRO INSUFICIENTE. FALTAM ' + (gasto - dinheiroRecebido).toFixed(2) + ' REAIS\n': 'TROCO = ' + troco.toFixed(2) + '\n'}\n`
}

button.addEventListener('click', resolverEx14)
