let button = document.getElementById('button');

function resolverEx21() {
    let valorX = parseInt(document.getElementById('inputValorX').value);
    
    nums = '';
    for(let i = 1; i <= valorX; i++) {
        if (i % 2 == 0){
            nums += i + '\n';
        }
    }
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite o valor de X: ${valorX}\n${nums}\n\n`
}

button.addEventListener('click', resolverEx21)
