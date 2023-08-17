// Isto é um comentário em linha

/* Isto é um comentário com várias linhas.
Eis aqui mais uma linha.
E aqui outra.
Isso pode seguir infinitamente dentro do comentário.
*/

/* 
O que precisamos fazer? - Quando passar o mouse em cima do personagem na lista, tem que adicionar uma borad azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grando do que esté selecionado .

OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

    Passo 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.

    Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursos do mouse.

    Passo 3 - Verificar se já existe um perosnagem selecionado, se sim, devemos remover a seleção dele.

OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

    Passo 1 - Pegar o elemento do personagem grande para adicionar as informações nele.

    Passo 2 - Alterar a imagem do personagem grande.

    Passo 3 - Alterar o nome do personagem grande.

    Passo 4 - Alterar a descrição do personagem grande.
*/

// OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//     Passo 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

// Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursos do mouse.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Passo 3 - Verificar se já existe um perosnagem selecionado, se sim, devemos remover a seleção dele.

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        
        // OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

        // Passo 1 - Pegar o elemento do personagem grande para adicionar as informações nele.

        alterarImagemPersonagemSelecionado(personagem);
        
        // Passo 3 - Alterar o nome do personagem grande.

        alterarNomePersonagemSelecionado(personagem);

        // Passo 4 - Alterar a descrição do personagem grande.

        alterarDescricaoPersonagem(personagem);   

    })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // Passo 2 - Alterar a imagem do personagem grande.
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

