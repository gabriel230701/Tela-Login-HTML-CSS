// script.js

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio padrão do formulário

    const usuario = document.querySelector('input[type="text"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    // Aqui você define o login válido (exemplo)
    if (usuario === "admin" && senha === "1234") {
        // salva o usuário (opcional)
        localStorage.setItem("usuarioLogado", usuario);

        // redireciona pra segunda página
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }

});
