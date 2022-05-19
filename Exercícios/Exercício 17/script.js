let button = document.getElementById('button');

function resolverEx17() {
    let primeiroNum = parseInt(document.getElementById('inputNumero1').value);
    let segundoNum = parseInt(document.getElementById('inputNumero2').value);
    
    let multiploResult = (primeiroNum % segundoNum == 0 || segundoNum % primeiroNum == 0 ? 'São múltiplos.' : 'Não são múltiplos.');
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite dois números inteiros:\n${primeiroNum}\n${segundoNum}\n${multiploResult}\n\n`
}

button.addEventListener('click', resolverEx17)
