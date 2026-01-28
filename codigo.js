let puntos = 0;
let incremento = 1;

let contador = document.getElementById("contador");
let imagen = document.getElementById("imagen");
let comprar = document.getElementById("comprar");


imagen.onclick = function () {
    puntos = puntos + incremento;
    contador.innerHTML = puntos;
};

comprar.onclick = function () {
    if (puntos >= 10) {
        puntos = puntos - 10;
        incremento = incremento + 1;
        contador.innerHTML = puntos;
    } else {
        alert("No tienes suficientes puntos");
    }
};
