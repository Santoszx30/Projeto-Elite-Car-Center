const campos = document.querySelectorAll(".CampoCodigo");

campos.forEach((campo, index) => {
    campo.addEventListener("input", function () {
        if (campo.value.length === 1 && index < campos.length - 1) {
            campos[index + 1].focus();
        }
    });
});

campos.forEach((campo, index) => {
    campo.addEventListener("input", function () {
        if (campo.value.length === 1 && index < campos.length - 1) {
            campos[index + 1].focus();
        }
    });

    campo.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && campo.value === "" && index > 0) {
            campos[index - 1].focus();
        }

    });

});