let button = document.getElementById('button');

function resolverEx22() {
    let valorN = parseInt(document.getElementById('inputValorN').value);
    
    let tabuada = '';
    for(let i = 1; i <= 10; i++) {
        tabuada += `${valorN} x ${i} = ${valorN * i}\n`;
    }
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Deseja a tabuada para qual valor? ${valorN}\n${tabuada}\n\n`
}

button.addEventListener('click', resolverEx22)
