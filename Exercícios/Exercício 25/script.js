let button = document.getElementById('button');

function compararData(data1, dataC, data2) {
    mesData1 = parseInt(data1.split('/')[1]);
    diaData1 = parseInt(data1.split('/')[0]);
    mesData2 = parseInt(data2.split('/')[1]);
    diaData2 = parseInt(data2.split('/')[0]);
    mesDataC = parseInt(dataC.split('/')[1]);
    diaDataC = parseInt(dataC.split('/')[0]);
    
    if (mesData1 === 12 && mesDataC === 1 && diaData2 >= diaDataC) {
        return true;
    } else if (mesData1 === mesDataC && diaData1 <= diaDataC) {
        return true;
    } else if (mesData2 === mesDataC && diaDataC <= diaData2) {
        return true;
    }
    return false;
}

function resolverEx25() {
    let data = document.getElementById('inputData').value;
    
    let signo = '';
    if (compararData('22/12', data, '20/01')) {
        signo = 'Capricórnio';
    } else if (compararData('21/01', data, '18/02')) {
        signo = 'Aquário';
    } else if (compararData('19/02', data, '20/03')) {
        signo = 'Peixes';
    } else if (compararData('21/03', data, '20/04')) {
        signo = 'Aries';
    } else if (compararData('21/04', data, '20/05')) {
        signo = 'Touro';
    } else if (compararData('21/05', data, '20/06')) {
        signo = 'Gêmeos';
    } else if (compararData('21/06', data, '22/07')) {
        signo = 'Câncer';
    } else if (compararData('23/07', data, '22/08')) {
        signo = 'Leão';
    } else if (compararData('23/08', data, '22/09')) {
        signo = 'Virgem';
    } else if (compararData('23/09', data, '22/10')) {
        signo = 'Libra';
    } else if (compararData('23/10', data, '21/11')) {
        signo = 'Escorpião';
    } else if (compararData('22/11', data, '21/12')) {
        signo = 'Sagitário';
    } else{
        signo = 'Data inválida';
    }

    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Data de nascimento: ${data}\n${signo !== 'Data inválida' ? 'Signo: ' + signo : 'Data inválida'}\n\n`
}

button.addEventListener('click', resolverEx25)