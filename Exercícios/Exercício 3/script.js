let button = document.getElementById('button');

function resolverEx3() {
    let nome1 = document.getElementById('inputNome1').value;
    let nome2 = document.getElementById('inputNome2').value;
    let idade1 = parseInt(document.getElementById('inputIdade1').value);
    let idade2 = parseInt(document.getElementById('inputIdade2').value);
    
    let idadeMedia = ((idade1 + idade2) / 2).toFixed(1);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Nome1: ${nome1}\nIdade1: ${idade1}\nNome2: ${nome2}\nIdade2: ${idade2}\nA idade média de ${nome1} e ${nome2} é de ${idadeMedia} anos\n\n`
}

button.addEventListener('click', resolverEx3)
