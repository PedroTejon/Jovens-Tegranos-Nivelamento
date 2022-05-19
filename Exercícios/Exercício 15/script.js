let button = document.getElementById('button');

function resolverEx15() {
    let medidaGlicose = parseInt(document.getElementById('inputMedidaGlicose').value);
    
    let classificacao;
    if (medidaGlicose <= 100) {
        classificacao = 'Normal';
    } else if (medidaGlicose <= 140){
        classificacao = 'Elevado';
    } else{
        classificacao = 'Diabetes';
    }
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite a medida da glicose: ${medidaGlicose}\nClassificação: ${classificacao}\n\n`
}

button.addEventListener('click', resolverEx15)
