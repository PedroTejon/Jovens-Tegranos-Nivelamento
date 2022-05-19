let button = document.getElementById('button');

function resolverEx8() {
    let medidaA = parseFloat(document.getElementById('inputMedidaA').value);
    let medidaB = parseFloat(document.getElementById('inputMedidaB').value);
    let medidaC = parseFloat(document.getElementById('inputMedidaC').value);
    
    let areaQuadrado = (medidaA * 2).toFixed(4);
    let areaTriangulo = (medidaA * medidaB / 2).toFixed(4);
    let areaTrapezio = (((medidaA + medidaB) * medidaC) / 2).toFixed(4);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite a medida A: ${medidaA}\nDigite a medida B: ${medidaB}\nDigite a medida C: ${medidaC}\nÁREA DO QUADRADO = ${areaQuadrado}\nÁREA DO TRIÂNGULO = ${areaTriangulo}\nÁREA DO TRAPÉZIO = ${areaTrapezio}\n\n`
}

button.addEventListener('click', resolverEx8)
