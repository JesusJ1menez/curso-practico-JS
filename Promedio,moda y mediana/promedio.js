function calcularMediaAritmetica(lista) {
    // Forma 1
    // let sumaLista = 0;
    // // for (let i = 0; i < lista.length; i++) {
    // //     sumaLista += lista[i];
    // // }

    // Forma 2
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}