let button = document.getElementById('button');

function resolverEx10() {
    let primeiroVal = parseInt(document.getElementById('inputPrimeiroValor').value);
    let segundoVal = parseInt(document.getElementById('inputSegundoValor').value);
    let terceiroVal = parseInt(document.getElementById('inputTerceiroValor').value);
    
    let menorVal = Math.min(primeiroVal, segundoVal, terceiroVal)
    
    let textArea = document.getElementById('outputArea');

    textArea.textContent += `Primeiro valor: ${primeiroVal}\nSegundo valor: ${segundoVal}\nTerceiro valor: ${terceiroVal}\nMENOR = ${menorVal}\n\n`
}

button.addEventListener('click', resolverEx10)
