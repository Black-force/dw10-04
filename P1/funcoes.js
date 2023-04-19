/* PRIMEIRA PARTE */

/* Implemente as seguintes funcionalidades:
a (1.0) Ao carregar a página, coloque automaticamente o foco no campo de texto. */
/* b (3.0) Durante a digitação dentro do campo de texto, caso a tecla digitada — event.key, dentro de
um evento de teclado — seja equivalente à ’Enter’, obtenha o texto atual do campo e concatene-o
ao conteúdo da div logo abaixo. Utilize a tag <br> para quebrar linha entre cada concatenação.
Após concatenar um conteúdo, limpe o campo de texto.
c (1.0) Ao sair do campo de texto, modifique seu valor todo para caixa baixa (letra minúscula). Dica: */
/* string.toLowerCase(). */

/* letra a */
function digitando() {
    var caixaTexto = document.querySelectorAll("input");
    caixaTexto.focus();
}

/* NÃO CONSEGUI FAZER A LETRA B!!!! */


/* letra c */
window.addEventListener('load', function () {
    const caixaBaixa = document.getElementById('caixaAlta');
    const conteudo = document.getElementById('conteudo');

    caixaAlta.addEventListener('change', function () {
        caixaBaixa.value = caixaBaixa.value.toLowerCase();
        conteudo.innerHTML = caixaBaixa.value;
    });

});

/* SEGUNDA PARTE */

/* a (2.5) Obter o valor em R$ do primeiro campo, obter um valor de desconto em porcentagem do
segundo campo (e.g., 5%, 10%, 20%) aplicar o desconto ao valor. Em seguida, exibir um alerta
informando qual o total líquido, após o desconto.
b (2.5) Caso um dos campos esteja vazio, exibir um alerta informando ’Preencha todos os campos’
e alterar a cor de fundo do campo vazio para rgb(255, 155, 155). Caso contrário — nenhum
dos dois vazios — defina a cor de fundo com a cor original. */

/* letra a */
function Multiplicar(valor, porcentagem) {
    const botao = document.getElementById("botao");
    var valor = document.getElementById("valor");
    var porcentagem = document.getElementById("porcentagem");

    botao.addEventListener('click', function () {
        var valor = document.querySelector(valor).value;
        var porcentagem = document.querySelector(porcentagem).value;

        var resultado = (parseFloat(valor) * parseInt(porcentagem / 100));
        alert(`Total Liquido: ${resultado}`);

    });

}

/* letra b */
window.addEventListener('load', function () {
    const valor = document.getElementById('valor');
    const porcentagem = document.getElementById('porcentagem');
    const botao = document.getElementById('botao');

    botao.addEventListener('click', function () {
        if (valor.value == 0 && porcentagem == 0) {
            alert('Preencha todos os campos');
            valor.style.backgroundColor = 'rgb(255, 155, 155)';
            porcentagem.style.backgroundColor = 'rgb(255, 155, 155)';
        } else {
            valor.style.backgroundColor = 'white';
            porcentagem.style.backgroundColor = 'white';
        }

        if (valor.value == 0) {
            alert('Preencha todos os campos');
            valor.style.backgroundColor = 'rgb(255, 155, 155)';

        } else {
            valor.style.backgroundColor = 'white';
        }

        if (porcentagem == 0) {
            alert('Preencha todos os campos');
            porcentagem.style.backgroundColor = 'rgb(255, 155, 155)';
        } else {

            porcentagem.style.backgroundColor = 'white';
        }

    });
});




