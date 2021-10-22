const {appTablaMultiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

appTablaMultiplicar(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado con éxito'))
    .catch( err => console.log(err));