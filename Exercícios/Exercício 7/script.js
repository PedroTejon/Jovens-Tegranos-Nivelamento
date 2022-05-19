let button = document.getElementById('button');

function resolverEx7() {
    let distanciaPercorrida = parseInt(document.getElementById('inputDistanciaPercorrida').value);
    let combustivelGasto = parseFloat(document.getElementById('inputCombustivelGasto').value);
    
    let consumoMedio = (distanciaPercorrida / combustivelGasto).toFixed(3);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Distância percorrida: ${distanciaPercorrida}\nCombustível gasto: ${combustivelGasto}\nConsumo médio = ${consumoMedio}\n\n`
}

button.addEventListener('click', resolverEx7)
