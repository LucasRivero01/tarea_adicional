const argv = require('yargs')
    .option('n', {
        alias: 'nombre',
        type: 'string',
        demandOption: false,
        describe: 'Nombre de la persona'
    })
    .option('a', {
        alias: 'apellido',
        type: 'string',
        demandOption: false,
        describe: 'Apellido de la persona'
    })
    .option('e', {
        alias: 'edad',
        type: 'number',
        demandOption: false,
        describe: 'Edad de la persona'
    })
    .option('d', {
        alias: 'delete',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Elimina un registro'
    })
    .check((argv, options) => {
        if (isNaN(argv.e)) {
            throw 'No es un numero'
        }
        if (argv.e < 18) {
            throw 'Debes ser mayor de edad'
        }
        return true
    })
    .argv;

module.exports = argv;