const crud = require("./crud");

async function buscarDados(){
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadosId(){
    const dados = await crud.getById("pessoas", '5S2bsktIRK3s9ZIFilpc')
    console.log(dados);
}

async function (){
    const dados = await crud.remove("pessoas", )
    console.log(dados);
}

buscarDados();