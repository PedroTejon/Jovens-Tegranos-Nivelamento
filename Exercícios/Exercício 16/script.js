let button = document.getElementById('button');

function resolverEx16() {
    let primeiraDistancia = parseFloat(document.getElementById('inputDistancia1').value);
    let segundaDistancia = parseFloat(document.getElementById('inputDistancia2').value);
    let terceiraDistancia = parseFloat(document.getElementById('inputDistancia3').value);
    
    let maiorDistancia = Math.max(primeiraDistancia, segundaDistancia, terceiraDistancia);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite as três distâncias:\n${primeiraDistancia}\n${segundaDistancia}\n${terceiraDistancia}\nMAIOR DISTÂNCIA = ${maiorDistancia}\n\n`
}

button.addEventListener('click', resolverEx16)
