let button = document.getElementById('button');

function resolverEx4() {
    let precoUnitario = parseFloat(document.getElementById('inputPrecoUnitario').value);
    let qntdComprada = parseInt(document.getElementById('inputQntdComprada').value);
    let dinTotal = parseFloat(document.getElementById('inputDinheiroRecebido').value);
    
    let troco = (dinTotal - (precoUnitario * qntdComprada)).toFixed(2);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Preço unitário do produto: ${precoUnitario}\nQuantidade comprada: ${qntdComprada}\nDinheiro recebido: ${dinTotal}\nTROCO = ${troco}\n\n`
}

button.addEventListener('click', resolverEx4)
