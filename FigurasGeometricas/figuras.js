// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    resultado = lado1 + lado2 + base;
  return resultado;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Aqui interactuamos con el HTML
// Funciones para Cuadrado
function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Fucniones para Triangulo
function calcularPerimetroTriangulo(params) {
    const input = document.getElementById("InputTriangulo")
    const value = input.value;
    var lados = parseInt(value);
    const inputBase = document.getElementById("baseTriangulo")
    const valueBase = inputBase.value;
    var base = parseInt(valueBase);

    const perimetro = perimetroTriangulo(lados,lados,base);
    alert(perimetro);
}

function calcularAreaTriangulo(params) {
    const inputBase = document.getElementById("baseTriangulo")
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("alturaTriangulo");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}

// Funciones para Circulo
function calcularPerimetroCirculo(params) {
    const inputRadio = document.getElementById("InputCirculo")
    const valueRadio = Number(inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo(params) {
    const inputRadio = document.getElementById("InputCirculo")
    const valueRadio = Number(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}