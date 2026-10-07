const container = document.querySelector(".container");

const btnToSignUp = document.getElementById("btn-to-signup");
const btnToSignIn = document.getElementById("btn-to-signin");

// Desplaza el panel verde a la derecha (muestra Iniciar Sesión)
btnToSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

// Regresa el panel verde a la izquierda (muestra Registrarse)
btnToSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});