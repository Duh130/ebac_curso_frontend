$(document).ready(function(){
    $("#form-tarefa").hide();

    $('#nova-tarefa').click(function () {
        $("#form-tarefa").slideToggle();
    });

    $('#form-tarefa').submit(function(event){
        event.preventDefault();
        
        var tarefaNome = $('#tarefa').val();
        if(tarefaNome.trim() !== ''){
            $('#lista-tarefas').append('<li><span class="tarefa-nome">' + tarefaNome + '</span></li>');
            $('#tarefa').val('');
        }
    });

    $(document).on('click', '#lista-tarefas li', function(){
        $(this).find('.tarefa-nome').toggleClass('completed');
    });
});