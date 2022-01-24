const { clear } = require('console');
const fs = require('fs');
const { validarEdad } = require('./config/validaciones');
const argv = require('./config/yargs');
let nombreAr = '';

const lectura = (nombre, apellido, edad) => {
    return new Promise((resolve, reject) => {
        const nombreArch = validarEdad(edad);
        fs.readFile('./salida/lectura.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            fs.unlinkSync('./salida/lectura-depurado.txt');
            // Separar por salto de línea
            const lines = data.split("\n");
            // Recorrer todas las líneas
            lines.forEach(line => {
                // Separar datos:
                // .split() es para separar
                // .map() es para recorrer el nuevo arreglo
                // .trim() elimina espacios al inicio y final
                const datos = line.split("\,", 3).map(a => a.trim());
                const [nombre, apellido, edad] = datos

                if (nombre != argv.n || apellido != argv.a || edad != argv.e) {
                    resultado = `${nombre},${apellido},${edad},\n`;
                    fs.writeFile('./salida/lectura-depurado.txt', resultado, { flag: 'a' }, (err) => {
                        if (err) throw err;
                    })
                }
            });
            resolve(`lectura-depurado.txt`);
        })
    })
}


module.exports = {
    lectura,
}