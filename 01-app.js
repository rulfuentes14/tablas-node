//Requerimientos o librerias

//Requerimientos  propios de node.js
//const fs = require('fs');

//Lbreria externos
//const fs = require('express');

//Libreria de archivos propios
//const fs = require('express');

//Libreria
//const multiplicar = require('./multiplicar/multiplicar');
// //destructuración de Libreria propia
// const {crearArchivo} = require('./multiplicar/multiplicar');
//let base = 'abc';


//console.log(multiplicar);

//Objeto Module
//console.log(module);

//Objeto Module Arggumentos
//console.log(process.argv);

//Implementacion de libreria externa Yargs 
//permite establecer identificacion de comandos
// 
const argv = require('./config/yargs').argv;
//const colors = require('colors'); //definicion normal de color
const colors = require('colors/safe'); //definicion normal de color

//destructuración de Libreria propia
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then(listado => console.log(`${listado}`.green)) //Propiedad green de colors
        .catch(e=>console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo.green}`)) //console.log(`Archivo creado: colors.green(${archivo})`)
        //.then(archivo => console.log('Archivo creado: ',colors.green(archivo))) //console.log(`Archivo creado: colors.green(${archivo})`)
        .catch(e=>console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
//console.log(argv);
//let argv2 = process.argv;
//console.log();



//console.log('Limite ',argv.limite);
//console.log(argv.base);
//console.log(argv2);

//se comentan estas lineas para implementar yargs
//let argv = process.argv;
//let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);
//console.log(parametro);

//crearArchivo(base)
