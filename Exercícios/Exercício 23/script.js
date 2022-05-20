let button = document.getElementById('button');

function resolverEx23() {
    let num1 = parseInt(document.getElementById('inputNumero1').value);
    let num2 = parseInt(document.getElementById('inputNumero2').value);
    
    let soma = 0;
    for (let i = num1; i < num2; i++) {
        if (i % 2 == 1) {
            soma += i;
        }
    }
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite dois números:\n${num1}\n${num2}\nSOMA DOS ÍMPARES = ${soma}\n\n`
}

button.addEventListener('click', resolverEx23)
