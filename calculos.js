const fs = require('fs');
const { validarEdad } = require('./config/validaciones');

const crearArchivo = (nombre, apellido, edad) => new Promise((resolve) => {
  let resultado = '';
  const nombreArch = validarEdad(edad);

  resultado = `${nombre},${apellido},${edad},\n`;

  fs.writeFile(nombreArch, resultado, { flag: 'a+' }, (err) => {
    if (err) throw err;
  });
  resolve(nombreArch);
});

module.exports = {
  crearArchivo,
};
