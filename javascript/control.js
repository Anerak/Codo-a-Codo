const form = document.querySelector(".t-form");

form.addEventListener("submit", validateData);

function validateData(e) {
    e.preventDefault();

    const errors = [];
    const [username, passw] = [...e.target.elements].filter(
        (el) => el.nodeName === "INPUT"
    );

    if (username.value.length <= 0)
        errors.push("- El usuario no puede estar vacío");
    if (username.value.indexOf("@") === -1)
        errors.push("- El usuario debe incluir un arroba @");

    if (passw.value.length <= 0) errors.push("- La clave no puede estar vacía");

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        document.querySelector(".t-login").classList.add("t-hidden");
        document.querySelector(".t-logged").classList.remove("t-hidden");
        username.value = "";
        passw.value = "";
    }
}

function logout() {
    document.querySelector(".t-login").classList.remove("t-hidden");
    document.querySelector(".t-logged").classList.add("t-hidden");
}
