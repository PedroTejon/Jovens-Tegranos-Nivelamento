let button = document.getElementById('button');

function resolverEx26() {
    let palavra = document.getElementById('inputPalavra').value;
    
    let qntdVogais = palavra.split('').filter((letra) => 'aeiouAEIOU'.includes(letra)).length;
    let qntdConsoantes = palavra.split('').filter((letra) => 'qwrtypsdfghjklçzxcvbnmQWRTYPSDFGHJKLÇZXCVBNM'.includes(letra)).length;
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Palavra: ${palavra}\nVogais: ${qntdVogais}\nConsoantes: ${qntdConsoantes}\n\n`
}

button.addEventListener('click', resolverEx26)
