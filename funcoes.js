let cachorros = require("./database/cachorros.json");
const fs = require("fs");
const path = require("path");
const { emitKeypressEvents } = require("readline");
const { findSourceMap } = require("module");
const { map, indexOf } = require("./settings/servicos");
const { captureRejections } = require("events");
const { get } = require("http");


// função que salva o arquivo em JSON
function salvar() {
  let arquivo = path.resolve("./database/cachorros.json");
  let json = JSON.stringify(cachorros, null, 4);
    fs.writeFileSync(arquivo, json);
}

// buscar
function buscar(idBuscado){
let cachorro = cachorros.find((cachorro) => {

    return cachorro.id == idBuscado;
});
return cachorro;
};


//listar
function listar(){
console.table(cachorros);
};

//listar();


// descrever
function descrever(id){

   let cachorro = buscar(id);
   // console.log(cachorro);
   if (cachorro) {
    console.log(cachorro)
   }else{
    console.log(`Não existe cachorro com o id ${id}`)
   }

}
descrever(11);

//adicionar
function adicionar(cachorroNovo){

    let novoCachorro = {

        id: cachorros[cachorros.length -1].id +1,
        nome: cachorroNovo.nome,
        castrado: cachorroNovo.castrado,
        dataDeNascimento: cachorroNovo.dataDeNascimento,
        peso: cachorroNovo.peso,
        sexo: cachorroNovo.sexo,
        vacinas: [],
        servicos: []

    
    }
    cachorros.push(novoCachorro);
    salvar();
}

//vacinar
function vacinar(id, vacina, data){
    
   let cachorroBuscado = buscar(id);
   if (cachorroBuscado){
    cachorroBuscado.vacinas.push({
        nome: vacina,
        data: data
    })
   }else{
    console.log("Cachorro inexistente");
   }
   salvar();
}


//atribuirServico
function atribuirServico(id, servico, data){
    let cachorroBuscado = buscar(id);
   if (cachorroBuscado){
    cachorroBuscado.servicos.push({
        servico: servico,
        data: data
            })
   }else{
    console.log("Cachorro inexistente");
   }
salvar();
}



function remover(id){
    let cachorroBuscado = buscar(id);
       if (cachorroBuscado){ 
       cachorros = cachorros.filter(cachorro => {
                        return cachorro.id != id;
        });
       }else{
        console.log("Cachorro inexistente");
       }
       salvar();
    }

module.exports = {
        salvar, 
        buscar,
        listar,
        descrever,
        adicionar,
        vacinar,
        atribuirServico,
        remover
} 

