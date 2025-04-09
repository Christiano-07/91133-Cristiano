// Espera o documento ser carregado
document.addEventListener('DOMContentLoaded', () => {
    // Captura o formulário
    const form = document.getElementById('formLogin');
    
    // Adiciona o evento de submissão do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos de login
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica se ambos os campos estão preenchidos
        if (username !== "" && password !== "") {
            // Redireciona para a página de produto (produto.html)
            window.location.href = "produto.html";  // Certifique-se de que 'produto.html' está na mesma pasta
        } else {
            // Exibe uma mensagem de erro caso algum campo esteja vazio
            alert("Por favor, preencha ambos os campos de usuário e senha.");
        }
    });
});
