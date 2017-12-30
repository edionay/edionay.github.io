
var texto = document.getElementById('entrada_de_texto');
texto.addEventListener("keyup", function () {
    var previa = document.getElementById('pre_visualizacao');
    if (texto.value === '') {
        previa.innerText = 'A prévia do seu texto aparecerá aqui...';
    } else {
        previa.innerText = texto.value;
    }
} )

var negrito = document.getElementById('caixa_negrito');
negrito.addEventListener("click", function() {
    var previa = document.getElementById('pre_visualizacao');
    if (negrito.checked) {
        previa.style.fontWeight = 'bold';
    } else {
        previa.style.fontWeight = 'normal';
    }
})

var italico = document.getElementById('caixa_italico');
italico.addEventListener("click", function() {
    var previa = document.getElementById('pre_visualizacao');
    if (italico.checked) {
        previa.style.fontStyle = 'italic';
    } else {
        previa.style.fontStyle = 'normal';
    }
})

var sublinhado = document.getElementById('caixa_sublinhado');
sublinhado.addEventListener("click", function() {
    var previa = document.getElementById('pre_visualizacao');
    if (sublinhado.checked) {
        previa.style.textDecoration = 'underline';
    } else {
        previa.style.textDecoration = 'none';
    }
})

window.addEventListener("load", function() {
        console.log("Bem-vindo(a)!");
    });
