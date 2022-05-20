let button = document.getElementById('button');

function resolverEx24() {
    let numeros = document.getElementById('inputNumeros').value;
    let numerosInt = numeros.split(', ').map((numero) => parseInt(numero));
    let numerosSorted = numerosInt.sort((a, b) => a - b);
    let numerosFinal = numerosSorted.join(', ');
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Números recebidos: ${numeros}\nOrdenados: ${numerosFinal}\n\n`
}

button.addEventListener('click', resolverEx24)
