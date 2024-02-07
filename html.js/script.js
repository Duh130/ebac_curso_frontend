function validarFormulario() {
    event .preventDefault();
    var valorA = parseInt(document.getElementById('campoA').value);
    var valorB = parseInt(document.getElementById('campoB').value);
    if (valorB > valorA) {
        exibirMensagemPositiva();
        return true; 
    } else {
        exibirMensagemNegativa();
        return false; 
    }
}



function exibirMensagemPositiva() {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = 'Formulário válido. B é maior que A.';
    mensagemElement.style.color = 'green';
}

function exibirMensagemNegativa() {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = 'Formulário inválido. B deve ser maior que A.';
    mensagemElement.style.color = 'red';
}

