const argv = require('./config/yargs');
const { lectura } = require('./lectura');
const { crearArchivo } = require('./calculos');

if (argv.d) {
  lectura(argv.n, argv.a, argv.e)
    .then((nombreArchivo) => console.log(nombreArchivo, 'generado'))
    .catch((err) => console.log(err));
} else {
  crearArchivo(argv.n, argv.a, argv.e)
    .then((nombreArchivo) => console.log(nombreArchivo, 'actualizado'))
    .catch((err) => console.log(err));
}
