let button = document.getElementById('button');

function resolverEx11() {
    let primeiraNota = parseFloat(document.getElementById('inputPrimeiraNota').value);
    let segundaNota = parseFloat(document.getElementById('inputSegundaNota').value);
    
    let notaFinal = (primeiraNota + segundaNota).toFixed(1);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite a primeira nota: ${primeiraNota}\nDigite a segunda nota: ${segundaNota}\nNOTA FINAL = ${notaFinal}\n${notaFinal < 60 ? 'REPROVADO\n': '' }\n`
}

button.addEventListener('click', resolverEx11)
