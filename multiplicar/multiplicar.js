//Requerimientos o librerias

//Requerimientos  propios de node.js
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise( (resolve,reject) =>{
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;            
        }

        resolve(data);
    });
}
//Lbreria externos
//const fs = require('express');

//Libreria de archivos propios
//const fs = require('express');

//module.exports.crearArchivos =(base) => {
let crearArchivo = (base, limite = 10) =>{
    return new Promise( (resolve,reject) =>{
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        
        for(let i = 1; i <= limite; i++){
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        /* Funcion que permite escribir un archivo */
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports ={
    crearArchivo,
    listarTabla
}

