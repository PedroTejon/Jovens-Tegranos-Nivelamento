let button = document.getElementById('button');

function resolverEx20() {
    let numInicial = parseInt(document.getElementById('inputNumInicial').value);
    let numFinal = parseInt(document.getElementById('inputNumFinal').value);
    
    let somaTotal = 0;
    for (let i = numInicial; i <= numFinal; i++)
        somaTotal = somaTotal + i;
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Número inicial: ${numInicial}\nNúmero final: ${numFinal}\nResultado: ${somaTotal}\n\n`
}

button.addEventListener('click', resolverEx20)
