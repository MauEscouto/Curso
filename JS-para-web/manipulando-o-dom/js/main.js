const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", function () {
    console.log("Cliquei no robô.");
});

function dizOi(nome) {
    console.log(nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi("Maurício ");

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
} )

//somar.addEventListener("click", () => { manipulaDados("somar")});
//subtrair.addEventListener("click", () => { manipulaDados("subtrair") });

function manipulaDados(operacao) {
    if (operacao === "+") {
        braco.value = parseInt(braco.value) + 1;
    }
    else {
        braco.value = parseInt(braco.value) - 1;
    }
}
