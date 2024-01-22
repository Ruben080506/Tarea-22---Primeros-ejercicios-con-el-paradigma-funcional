// Diseñe un objeto(JSON) que tenga 4 elementos: Uno de ellos debe ser una función flecha (=>)que recibe 2 parámetros. La función retorna el producto de estos parámetros multiplicados por 100

const objeto = {
  numerico: 145,
  string: "hola mundo",
  funflecha: (num1, num2) => num1 * num2 * 100,
  arreglo: {},
};

console.log(objeto.funflecha(20, 5));