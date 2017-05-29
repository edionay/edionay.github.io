/**
 * Created by edion on 28/05/2017.
 */


function botaoExcluirClicado(idDaLinha) {
    const tabelaDeTarefas = document.getElementById("tabela-de-tarefas");
    const linhaASerApagada = document.getElementById(idDaLinha);
    if (window.confirm("Deseja apagar a linha selecionada?")) {
        tabelaDeTarefas.deleteRow(linhaASerApagada.rowIndex);
    }
}
