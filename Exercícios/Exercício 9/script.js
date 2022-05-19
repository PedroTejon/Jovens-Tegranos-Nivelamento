let button = document.getElementById('button');

function resolverEx9() {
    let duracao = parseInt(document.getElementById('inputDuracao').value);
    
    let horas = Math.floor(duracao / 3600);
    let minutos = Math.floor(duracao % 3600 / 60);
    let segundos = Math.floor(duracao % 3600 % 60);
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Digite a duração em segundos: ${duracao}\n${horas}:${minutos}:${segundos}\n\n`
}

button.addEventListener('click', resolverEx9)
