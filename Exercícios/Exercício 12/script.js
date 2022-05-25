let button = document.getElementById('button');

function resolverEx12() {
    let coeficienteA = parseFloat(document.getElementById('inputCoeficienteA').value);
    let coeficienteB = parseFloat(document.getElementById('inputCoeficienteB').value);
    let coeficienteC = parseFloat(document.getElementById('inputCoeficienteC').value);
    
    let delta = Math.sqrt(coeficienteB ** 2 - 4 * coeficienteA * coeficienteC);
    let x1 = ((0 - coeficienteB + delta) / (2 * coeficienteA));
    let x2 = ((0 - coeficienteB - delta) / (2 * coeficienteA));
    
    let textArea = document.getElementById('outputArea');
    if (isNaN(x1)) {
        textArea.textContent += `Coeficiente a: ${coeficienteA}\nCoeficiente b: ${coeficienteB}\nCoeficiente c: ${coeficienteC}\nEsta equação não possui raízes reais\n\n`
    } else {
        textArea.textContent += `Coeficiente a: ${coeficienteA}\nCoeficiente b: ${coeficienteB}\nCoeficiente c: ${coeficienteC}\nX1 = ${x1.toFixed(4)}\nX2 = ${x2.toFixed(4)}\n\n`
    }
}

button.addEventListener('click', resolverEx12)
