//alert('Bem vindo ao meu primeiro site!');
// teste para ver se o html esta linkado com o js

/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida basoado nos filtros que o usuário escolheu
*/

//passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
const botaoFiltrar = document.querySelector('.botao-filtrar');
// console.log('o botao foi clicado');
//vai aparecer no console a mensagem "o botao foi clicado" toda vez que o botão for clicado para garantir que o JS está funcionando corretamente
const botaoLimpar = document.querySelector('.botao-limpar');

    botaoLimpar.addEventListener('click', function () {
        //console.log('o botao limpar foi clicado');
        document.querySelector('#categoria').value = '';
        document.querySelector('#preco').value = '';
        //mostra todas as cartas

        const cartas = document.querySelectorAll('.carta');
        cartas.forEach(function (carta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        })

    })


//passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function () {
    // console.log('o botao foi clicado');

    //passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria');
    //console.log(categoriaSelecionada.value);
    //pega o valor do campo de categoria e armazena na variável categoriaSelecionada , quando selecionar a categoria, o valor será atualizado no console   
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    //console.log(precoMaximoSlecionado);
    //pega o valor do campo de preço e armazena na variável precoMaximoSlecionado , quando selecionar o preço, o valor será atualizado no console



    //passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida basoado nos filtros que o usuário escolheu
    //qualySelector busca apenas 1 elemento qualySelectorAll busca todos os elementos que possuem a classe carta


    const cartas = document.querySelectorAll('.carta');
    //console.log(cartas);

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        //console.log(categoriaCarta);
        //para cada carta, vamos verificar se ela deve ser mostrada ou escondida

        const precoCarta = carta.dataset.preco;
        //console.log(precoCarta);

        let mostrarCarta = true;
        //inicializa a variável mostrarCarta como true, ou seja, a carta deve ser mostrada
        //console.log('a categoria selecionada é: ' + categoriaSelecionada.value);


        const temFiltroDeCategoria = categoriaSelecionada.value !== '';
        const cartaNaoBateComOFiltrodeCategoria = categoriaSelecionada.value.toLowerCase() !== categoriaCarta.toLowerCase();
        //verifica se o usuário selecionou uma categoria, se sim, verifica se a carta não bate com o filtro de categoria
        //toLowerCase() transforma a string em minúsculas para evitar problemas de comparação entre maiúsculas e minúsculas



        if (temFiltroDeCategoria && cartaNaoBateComOFiltrodeCategoria) {
            mostrarCarta = false;

        }
        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComOFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComOFiltroDePreco) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');

        }
    });


});