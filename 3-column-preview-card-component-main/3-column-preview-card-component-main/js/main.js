//guardar el estado columna activa
let columnaActiva = 1;

//seleccionar las columnas

const columnas = document.querySelectorAll(".columna");

//escuchar los clicks en cada columna
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice);

    });
});
//cambiar el estado de la columnas
//quitamos la actividad de una y se la pasamos a la otra la recibe
//cuando hacemos click
function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}