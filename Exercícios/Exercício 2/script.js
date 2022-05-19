let button = document.getElementById('button');

function resolverEx2() {
    let baseRetangulo = parseFloat(document.getElementById('inputBaseRetangulo').value);
    let alturaRetangulo = parseFloat(document.getElementById('inputAlturaRetangulo').value);

    let areaRetangulo = (baseRetangulo * alturaRetangulo).toFixed(4);
    let perimetroRetangulo = (baseRetangulo * 2 + alturaRetangulo * 2).toFixed(4);
    let diagonalRetangulo = Math.sqrt((baseRetangulo ** 2) + (alturaRetangulo ** 2)).toFixed(4);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Base do retângulo: ${baseRetangulo}\nAltura do retângulo: ${alturaRetangulo}\nÁREA = ${areaRetangulo}\nPERÍMETRO = ${perimetroRetangulo}\nDIAGONAL = ${diagonalRetangulo}\n\n`
}

button.addEventListener('click', resolverEx2)
