const fs = require('fs');
const colors = require('colors');

const appTablaMultiplicar = async(base = 1, listar, tope) =>{
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= tope; i++){
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${ 'X'.magenta } ${i} ${ '='.magenta } ${base * i}\n`;
        }

        if(listar){
            
            console.log('========================='.white.bgMagenta);
            console.log(colors.bgMagenta.white(`Tabla del ${base}`));
            console.log('========================='.white.bgMagenta);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    appTablaMultiplicar
}