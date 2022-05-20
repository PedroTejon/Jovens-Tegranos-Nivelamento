let button = document.getElementById('button');

function resolverEx30() {
    let numero = parseInt(document.getElementById('inputNumero').value);
    
    let listaUnitarios = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
    let listaDezenas = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
    
    let numeroExtenso;
    if (numero < 20){
        numeroExtenso = listaUnitarios[numero];
    } else{
        let casaDecimal = Math.floor(numero / 10);
        let casaUnitaria = numero % 10;
        
        numeroExtenso = listaDezenas[casaDecimal - 2] + (casaUnitaria > 0 ? ` e ${listaUnitarios[casaUnitaria - 1]}` : '');
    }
    
    let textArea = document.getElementById('outputArea');
    textArea.textContent += `Número: ${numeroExtenso}\nSaída: ${numeroExtenso}\n\n`
}

button.addEventListener('click', resolverEx30)
