let button = document.getElementById('button');

function resolverEx28() {
    let valores = document.getElementById('inputValores').value;
    let valoresInt = valores.split(', ').map((valor) => parseInt(valor));
    
    console.log(valoresInt)
    
    let maiorValor = Math.max(...valoresInt);
    let menorValor = Math.min(...valoresInt);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Valores: ${valores}\nSaída: ${menorValor} e ${maiorValor}\n\n`
}

button.addEventListener('click', resolverEx28)
