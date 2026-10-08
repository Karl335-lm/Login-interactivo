document.addEventListener("DOMContentLoaded", () => {
    // 1. Mostrar nombre de usuario en el Navbar y configurar el menú desplegable
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    const userDisplayName = document.getElementById("user-display-name");
    const userDropdown = document.getElementById("user-dropdown");
    
    if (usuarioActivo) {
        if (userDisplayName) userDisplayName.textContent = usuarioActivo;
    } else {
        window.location.href = "login.html";
    }

    if (userDisplayName && userDropdown) {
        userDisplayName.addEventListener("click", (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle("show");
        });

        document.addEventListener("click", () => {
            userDropdown.classList.remove("show");
        });
    }

    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
        btnLogout.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("usuarioActivo");
            window.location.href = "login.html";
        });
    }

    // 2. Sidebar hamburguesa y navegación entre pestañas (Inicio / Captura)
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }

    const menuInicio = document.getElementById("menu-inicio");
    const menuUsuarios = document.getElementById("menu-usuarios");
    const submenuCaptura = document.getElementById("submenu-captura");
    
    const seccionInicio = document.getElementById("seccion-inicio");
    const seccionCaptura = document.getElementById("seccion-captura");

    if (menuInicio && seccionInicio && seccionCaptura) {
        menuInicio.addEventListener("click", (e) => {
            e.preventDefault();
            seccionInicio.style.display = "block";
            seccionCaptura.style.display = "none";
            if (submenuCaptura) submenuCaptura.classList.remove("open");
        });
    }

    // Desplegar submenú Usuarios
    if (menuUsuarios && submenuCaptura) {
        menuUsuarios.addEventListener("click", (e) => {
            e.preventDefault();
            submenuCaptura.classList.toggle("open");
        });
    }

    // Cambiar a vista Captura al hacer clic en el submenú
    const subCapturaLink = document.querySelector("#submenu-captura a");
    if (subCapturaLink && seccionInicio && seccionCaptura) {
        subCapturaLink.addEventListener("click", (e) => {
            e.preventDefault();
            seccionInicio.style.display = "none";
            seccionCaptura.style.display = "block";
        });
    }

    // 3. Validación de Usuario con librería utileria.js
    const formUsuario = document.getElementById("form-usuario");
    if (formUsuario) {
        formUsuario.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre-usuario").value;
            const correo = document.getElementById("correo-usuario").value;
            const pass = document.getElementById("pass-usuario").value;
            let esValido = true;

            const errNombre = document.getElementById("err-nombre-usu");
            const errCorreo = document.getElementById("err-correo");
            const errPass = document.getElementById("err-pass");

            if (typeof soloLetras === "function" && !soloLetras(nombre)) {
                if (errNombre) errNombre.textContent = "El nombre solo debe contener letras.";
                esValido = false;
            } else if (errNombre) {
                errNombre.textContent = "";
            }

            if (typeof validarCorreo === "function" && !validarCorreo(correo)) {
                if (errCorreo) errCorreo.textContent = "Correo electrónico no válido.";
                esValido = false;
            } else if (errCorreo) {
                errCorreo.textContent = "";
            }

            if (typeof validarPassword === "function" && !validarPassword(pass)) {
                if (errPass) errPass.textContent = "La contraseña debe tener mínimo 8 caracteres y al menos una mayúscula y un número.";
                esValido = false;
            } else if (errPass) {
                errPass.textContent = "";
            }

            if (esValido) {

    const modalUsuario = document.getElementById("modal-usuario");
    const modalTextoUsuario = document.getElementById("modal-texto-usuario");

    if (modalUsuario && modalTextoUsuario) {
        modalTextoUsuario.textContent =
            "¡Usuario registrado y validado correctamente!";

        modalUsuario.classList.add("active");
    } else {
        console.error("No se encontró el modal de usuario.");
    }
}
        });
    }

    // 4. Formulario de alumnos y fecha de nacimiento
    const inputFecha = document.getElementById("fecha-nacimiento");
    if (inputFecha) {
        const hoy = new Date().toISOString().split("T")[0];
        inputFecha.setAttribute("max", hoy);
    }

    const modalEdad = document.getElementById("modal-edad");
    const modalTextoEdad = document.getElementById("modal-texto-edad");
    const formAlumno = document.getElementById("form-alumno");

    if (formAlumno) {
        formAlumno.addEventListener("submit", (e) => {
            e.preventDefault();
            const numControl = document.getElementById("num-control").value;
            const fechaNac = document.getElementById("fecha-nacimiento").value;
            let esValido = true;

            const errControl = document.getElementById("err-control");

            const regexControl = /^\d{6}$/;
            if (!regexControl.test(numControl)) {
                if (errControl) errControl.textContent = "El número de control debe ser exactamente de 6 dígitos.";
                esValido = false;
            } else if (errControl) {
                errControl.textContent = "";
            }

            if (!fechaNac) {
                esValido = false;
            }

            if (esValido) {
                const edad = calcularEdad(fechaNac);
                const mayor = edad >= 18;

                if (modalTextoEdad) {
                    modalTextoEdad.textContent = `Edad calculada: ${edad} años. El alumno ${mayor ? "SÍ es mayor de edad" : "NO es mayor de edad"}.`;
                }
                if (modalEdad) {
                    modalEdad.classList.add("active");
                }
            }
        });
    }

    const cerrarModal = document.getElementById("cerrar-modal");
    if (cerrarModal && modalEdad && formAlumno) {
        cerrarModal.addEventListener("click", () => {
            modalEdad.classList.remove("active");
            formAlumno.reset();
        });
    }
     const cerrarModalUsuario = document.getElementById("cerrar-modal-usuario");
    const modalUsuario = document.getElementById("modal-usuario");

    if (cerrarModalUsuario && modalUsuario && formUsuario) {
        cerrarModalUsuario.addEventListener("click", () => {
            modalUsuario.classList.remove("active");
            formUsuario.reset();
        });
    }
});