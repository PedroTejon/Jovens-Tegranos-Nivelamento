let button = document.getElementById('button');

function resolverEx12() {
    let coeficienteA = parseFloat(document.getElementById('inputCoeficienteA').value);
    let coeficienteB = parseFloat(document.getElementById('inputCoeficienteB').value);
    let coeficienteC = parseFloat(document.getElementById('inputCoeficienteC').value);
    
    let delta = Math.sqrt(coeficienteB ** 2 - 4 * coeficienteA * coeficienteC);
    let x1 = ((0 - coeficienteB + delta) / (2 * coeficienteA)).toFixed(4);
    let x2 = ((0 - coeficienteB - delta) / (2 * coeficienteA)).toFixed(4);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Coeficiente a: ${coeficienteA}\nCoeficiente b: ${coeficienteB}\nCoeficiente c: ${coeficienteC}\nX1 = ${x1}\nX2 = ${x2}\n\n`
}

button.addEventListener('click', resolverEx12)
