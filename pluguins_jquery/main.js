$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    
    $('#form-cadastro').submit(function(event){
        event.preventDefault();
        
        const nomeCompleto = $('#nomeCompleto').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        console.log('Formulário enviado!');


    });
});