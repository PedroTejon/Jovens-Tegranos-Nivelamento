let button = document.getElementById('button');

function resolverEx1() {
    let larguraTerreno = parseFloat(document.getElementById('inputLarguraTerreno').value).toFixed(1);
    let comprimentoTerreno = parseFloat(document.getElementById('inputComprimentoTerreno').value).toFixed(1);
    let valorMetro = parseFloat(document.getElementById('inputValorMetro').value).toFixed(2);
    
    let area = (larguraTerreno * comprimentoTerreno).toFixed(2);
    let valorTotal = (area * valorMetro).toFixed(2);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Largura do terreno: ${larguraTerreno}\nComprimento do terreno: ${comprimentoTerreno}\nValor do metro quadrado: ${valorMetro}\nÁrea do terreno = ${area}\nPreço do terreno = ${valorTotal}\n\n`
}

button.addEventListener('click', resolverEx1)
