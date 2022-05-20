let button = document.getElementById('button');
let input = document.getElementById('inputEscala');
let inputTemp = document.getElementById('inputTemp');
let label = document.querySelector('label[for="inputTemp"]');

function resolverEx18() {
    let escala = input.value;
    
    if (escala === 'C' || escala === 'c' || escala === 'F' || escala === 'f'){
        let tempInicial = parseFloat(inputTemp.value);
        let escalaInicial, escalaFinal;
        
        if (escala === 'C' || escala === 'c') {
            tempFinal = (tempInicial * 9/5) + 32;
            
            escalaInicial = 'Celsius';
            escalaFinal = 'Fahrenheit';
        } else if (escala === 'F' || escala === 'f') {
            tempFinal = (tempInicial - 32) * 5/9;
            
            escalaInicial = 'Fahrenheit';
            escalaFinal = 'Celsius';
        }
        
        let textArea = document.getElementById('outputArea');
        textArea.textContent += `Você vai digitar a temperatura em qual escala (C/F)? ${escala}\nDigite a temperatura em ${escalaInicial}: ${tempInicial}\nTemperatura equivalente em ${escalaFinal}: ${tempFinal.toFixed(2)}\n\n`
    }
}

function verificarEscala() {
    if (input.value === 'C' || input.value === 'c'){
        if (inputTemp.visibility !== 'visible'){
            inputTemp.style.visibility = 'visible';
            label.style.visibility = 'visible';
        }
        label.textContent = 'Digite a temperatura em Celsius: ';
    } else if (input.value === 'F' || input.value === 'f') {
        if (inputTemp.visibility !== 'visible'){
            inputTemp.style.visibility = 'visible';
            label.style.visibility = 'visible';
        }
        label.textContent = 'Digite a temperatura em Fahrenheit: ';
    }
}

button.addEventListener('click', resolverEx18)
inputEscala.addEventListener('keyup', verificarEscala)