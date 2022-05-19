let button = document.getElementById('button');

function resolverEx5() {
    let raioCirculo = parseFloat(document.getElementById('inputRaioCirculo').value);
    
    let areaCirculo = (3.14159 * raioCirculo ** 2).toFixed(2);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite o valor do raio do círculo: ${raioCirculo}\nÁREA = ${areaCirculo}`;
}

button.addEventListener('click', resolverEx5)
