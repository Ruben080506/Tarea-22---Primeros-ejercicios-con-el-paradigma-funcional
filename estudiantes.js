// - Liste los estudiantes de la asignatura Física
// - Liste los estudiantes que sacaron una nota teórica superior a 20 

const datos = [
  {
    estudiante: "Juan Pérez",
    asignatura: "Física",
    finales: {
      teoria: 26,
      practico: 25,
    },
  },
  {
    estudiante: "Ana Cobo",
    asignatura: "Física",
    finales: {
      teoria: 25,
      practico: 25,
    },
  },
  {
    estudiante: "Carlos Castro",
    asignatura: "Matemática",
    finales: {
      teoria: 18,
      practico: 16,
    },
  },
  {
    estudiante: "Pedro Olaya",
    asignatura: "Física",
    finales: {
      teoria: 10,
      practico: 10,
    },
  },
  {
    estudiante: "Karla Turner",
    asignatura: "Matemática",
    finales: {
      teoria: 25,
      practico: 25,
    },
  },
];
const estfisica = datos.filter((estudiante) => estudiante.asignatura === "Física");
console.log("estudiantes de Física:", estfisica.map((estudiante) => estudiante.estudiante));
const Nota = datos.filter((estudiante) => estudiante.finales.teoria > 20);
console.log("estudiantes con nota superior a 20:", Nota.map((estudiante) => estudiante.estudiante));