// Declare un array de enteros con las temperaturas de varias ciudades. Filtre las temperaturas menores a 10 grados. Filtre las temperaturas superiores a 25 grados.

const tempsCiudades = [10, 25, 38, 8, -1, 0, 5, 40, -16, 7];

const temeraturamenor = tempsCiudades.filter((temp) => temp < 10);
const temeraturamayor = tempsCiudades.filter((temp) => temp > 25);

console.log("Temperaturas menores a 10 grados:", temeraturamenor);
console.log("Temperaturas mayores a 25 grados:", temeraturamayor);
