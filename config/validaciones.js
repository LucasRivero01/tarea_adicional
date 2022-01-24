const validarEdad = (edad) => {
    if (edad >= 45) {
        nombreArch = './salida/mayor45.txt'
    } else {
        nombreArch = './salida/menor45.txt'
    }
    return nombreArch
}

module.exports = {
    validarEdad,
}