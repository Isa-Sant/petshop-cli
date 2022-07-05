const cachorros = require('./database/cachorros.json')
const fs = require('fs');
const path = require('path');
const { isModuleNamespaceObject } = require('util/types');


function salvar () {

    let arquivo = path.resolve('/../database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);
    
    // console.log('arquivo: ' + arquivo);
    // console.log('json: ' + json);
    
    fs.writeFileSync(arquivo, json);
//console.log("arquivo: " + arquivo + " json: " + json);

};


// salvar();

function buscar(id){
    let cachorroBuscado = id;
    let resultado = cachorros.find(function(cachorroBuscdo){
        return cachorros.cachorroBuscado == cachorros.id;
    });

    console.log(resultado);
    
}
buscar(3);
//console.table(resultado);


