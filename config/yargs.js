const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false, 
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Límite para la tabla de multiplicar'
                    })
                    .check((argv, options) =>{
                        // console.log(options);
                        if( isNaN(argv.b)){
                            throw 'Ingrese solo números';
                        }
                        if(isNaN(argv.h)){
                            throw 'Ingrese solo números';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;