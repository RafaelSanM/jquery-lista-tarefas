$(document).ready(function() {

    function adicionarTarefa() {
        const nomeDaTarefa = $("#nome-tarefa");
        const textoDaTarefa = nomeDaTarefa.val().trim();

        if (textoDaTarefa !== "") {
            const listaDeTarefas = $("#lista-de-tarefas");
            const novoItem = $("<li>").text(textoDaTarefa);

            
            novoItem.click(function() {
                $(this).toggleClass("completo");
            });

            listaDeTarefas.append(novoItem);
            nomeDaTarefa.val(""); 
        }
    }

    $("#formulario-tarefa").submit(function(event) {
        event.preventDefault(); 
        adicionarTarefa();
    });
});

