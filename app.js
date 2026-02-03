"use strict";
// o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

const switcher = document.querySelector(".btn");
// Seleciona o botão pela classe "btn"

switcher.addEventListener("click", function () {
    // Executa quando o botão for clicado

    document.body.classList.toggle("dark-theme");
    // Adiciona ou remove a classe "dark-theme" no body

    var className = document.body.className;
    // Pega o nome da classe atual do body

    if (className == "light-theme") {
        // Se o tema atual for claro

        this.textContent = "Dark";
        // Texto do botão vira "Dark"

        console.log("current class name: " + className);
        // Mostra no console o tema atual
    } else {
        // Se o tema for escuro

        this.textContent = "Light";
        // Texto do botão vira "Light"
    }
});
