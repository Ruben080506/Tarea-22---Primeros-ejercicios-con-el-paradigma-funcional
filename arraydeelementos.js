// Declare un array de 10 elementos numéricos. El noveno debe ser una función flecha (=>) que recibe un entero que indica la cantidad de veces
// que se imprime una frase cualquier definida dentro de esta función(puedo usar un bucle for o while).

const arraydeelementos = [
  69,
  48,
  15,
  72,
  44,
  56,
  39,
  459,
  (elementos) => {
    const frase = "mi nombre es ruben";

    for (var j = 0; j < elementos; j++) {
      console.log(frase);
    }
  },
  10,
];

arraydeelementos[8](10);
