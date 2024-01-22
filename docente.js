// Diseñe un objeto JSON que defina la información de una asignatura que dicta un docente en la PUCESE.
// Usted debe considerar datos personales del docente. La asignatura sería un objeto anidado
// (dentro del objeto docente se encuentra el objeto asignatura - agregue datos principales de esa asignatura).
// Debería considerar los estudiantes matriculados en esa asignatura. Use lógica y creatividad en este objeto.

const docente = {
  nombre: "Luis Hidalgo",
  edad: 45,
  genero: "Masculino",
  especialidad: "Fisico Matematico",
  contacto: {
    email: "luis.hidalgo@pucese.edu.ec",
    telefono: "0999999999",
  },
  asignatura: {
    nombre: "CALCULO DIFERENCIAL E INTEGRAL",
    NRC: "8256",
    horario: "Martes de 07:00 a 08:00 y Miércoles de 09:00 a 11:00",
    estudiantes: [
      {
        nombre: "Ruben Dario Bone Murillo",
        correo: "rdbone@pucese.edu.ec",
        edad: 18,
        genero: "Masculino",
        nota: 50,
      },
      {
        nombre: "Cristopher Damian Tenorio Saavedra",
        correo: "cdtenorios@pucese.edu.ec",
        edad: 19,
        genero: "Masculino",
        nota: 37,
      },
      {
        nombre: "Eliana Milagros Lucas Gómez",
        correo: "emlucas@pucese.edu.ec",
        edad: 18,
        genero: "Femenino",
        nota: 30,
      },
      {
        nombre: "Amelie Grob Rosero",
        correo: "agrob@pucese.edu.ec",
        edad: 16,
        genero: "Femenino",
        nota: 48,
      },
      {
        nombre: "Noelia Nayeli Giron Salazar",
        correo: "nngiron@pucese.edu.ec",
        edad: 17,
        genero: "Femenino",
        nota: 35,
      },
    ],
    metodos: {
      matricula: () => {
        console.log("se han matriculado los estudiantes de forma correcta.");
      },
      notas: (estudiante) => {
        const encontrado = docente.asignatura.estudiantes.find(
          (e) => e.nombre === estudiante
        );
        if (encontrado) {
          console.log(`la nota del ${estudiante} es: ${encontrado.nota}`);
        } else {
          console.log(
            `no se encontró al estudiante ${estudiante} matriculado en la asignatura.`
          );
        }
      },
    },
  },
};
docente.asignatura.metodos.matricula();
docente.asignatura.metodos.notas("Ruben Dario Bone Murillo");
docente.asignatura.metodos.notas("Cristopher Damian Tenorio Saavedra");
docente.asignatura.metodos.notas("Eliana Milagros Lucas Gómez");
docente.asignatura.metodos.notas("Andy Gonzales");
