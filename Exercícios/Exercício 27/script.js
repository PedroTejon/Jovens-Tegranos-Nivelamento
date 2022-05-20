let button = document.getElementById('button');

function resolverEx27() {
    let palavra = document.getElementById('inputPalavra').value;
    let palavraMin = palavra.toLowerCase();
    let palavraReversa = palavraMin.split('').reverse().join('');
    
    console.log(palavraMin, palavraReversa);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Palavra: ${palavra}\nSaída: ${palavraMin === palavraReversa ? 'É palíndroma' : 'Não é palíndroma'}\n\n`
}

button.addEventListener('click', resolverEx27)
