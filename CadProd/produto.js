document.addEventListener('DOMContentLoaded', () => {
    const formCadastroProduto = document.getElementById('formCadastroProduto');
    const produtoCadastrado = document.getElementById('produtoCadastrado');
    const nomeProdutoCadastrado = document.getElementById('nomeProdutoCadastrado');
    const descricaoProdutoCadastrado = document.getElementById('descricaoProdutoCadastrado');
    const precoProdutoCadastrado = document.getElementById('precoProdutoCadastrado');
    const quantidadeProdutoCadastrado = document.getElementById('quantidadeProdutoCadastrado');

    formCadastroProduto.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nomeProduto = document.getElementById('nomeProduto').value;
        const descricaoProduto = document.getElementById('descricaoProduto').value;
        const precoProduto = document.getElementById('precoProduto').value;
        const quantidadeProduto = document.getElementById('quantidadeProduto').value;

        formCadastroProduto.style.display = 'none';
    });
});
