document.getElementById("loginForm").addEventListener("submit", function(event){
event.preventDefault(); // Impede o envio do formulário

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Vallidação dos campos
if (!username || !password){
    alert("Por favor, preencha todos os campos.");
    return;
}

if(password.lenght > 8){
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
}

// Salva o nome do usuário no LocalStorage
localStorage.setItem("username", username);

// Se a validação passar, abre o painel
window.location.href = "painel.html"; // Abre uma nova página
alert("Login bem sucedido!") // Pop-up de sucesso

});
