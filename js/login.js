document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const btnToSignUp = document.getElementById("btn-to-signup");
    const btnToSignIn = document.getElementById("btn-to-signin");

    // Desplaza el panel verde a la derecha (muestra Iniciar Sesión)
    if (btnToSignUp && container) {
        btnToSignUp.addEventListener("click", () => {
            container.classList.add("toggle");
        });
    }

    // Regresa el panel verde a la izquierda (muestra Registrarse)
    if (btnToSignIn && container) {
        btnToSignIn.addEventListener("click", () => {
            container.classList.remove("toggle");
        });
    }

    // Lógica de inicio de sesión y redirección a index.html
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const correoInput = document.getElementById("login-correo");
            const passwordInput = document.getElementById("login-password");

            const correo = correoInput ? correoInput.value : "";
            const password = passwordInput ? passwordInput.value : "";

            // Validaciones con funciones la librería utileria.js
            if (typeof validarCorreo === "function" && !validarCorreo(correo)) {
                if (loginError) {
                    loginError.textContent = "El correo electrónico no es válido.";
                } else {
                    alert("El correo electrónico no es válido.");
                }
                return;
            }

            if (typeof validarPassword === "function" && !validarPassword(password)) {
                if (loginError) {
                    loginError.textContent = "Debe tener mín. 8 caracteres, una mayúscula, una minúscula y un número.";
                } else {
                    alert("Debe tener mín. 8 caracteres, una mayúscula, una minúscula y un número");
                }
                return;
            }

            // Validación exitosa y reedirección a index.html
            localStorage.setItem("usuarioActivo", correo);
            window.location.href = "index.html";
        });
    }
});