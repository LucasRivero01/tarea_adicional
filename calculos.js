const fs = require('fs');
const { validarEdad } = require('./config/validaciones');
var color = require('colors');
const crearArchivo = (nombre, apellido, edad) => {
    return new Promise((resolve, reject) => {
        let resultado = '';
        let salidaConsola = '';
        // let nombreArch = '';
        // if (edad >= 45) {
        //     nombreArch = './salida/mayor45.txt'
        // } else {
        //     nombreArch = './salida/menor45.txt'
        // }
        const nombreArch = validarEdad(edad);
        //\n para salto de linea
        resultado = `${nombre},${apellido},${edad},\n`;


        fs.writeFile(nombreArch, resultado, { flag: 'a+' }, (err) => {
            if (err) throw err;
        })
        resolve(nombreArch);
    })
}

module.exports = {
    crearArchivo,
}