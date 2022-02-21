function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function esPar(numerito) {
    if (numerito % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;
function calcularMediana(lista) {
    const mitadLista1 = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2])
    
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = lista[mitadLista1];
        return mediana;
    }
}