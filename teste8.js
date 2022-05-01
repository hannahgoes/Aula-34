//Variável do tipo Objeto
var netflix = {
    nome:"Netlix",
    mensalidade: 30.00,
}

var hboMax = {
    nome:"HBO Max",
    mensalidade: 30.00,
}

var op = "H";

//Retorna os atributos de um objeto de acordo com a opção
switch(op){
    case "N": 
        console.log(netflix)
        break;
    case "H":
        console.log(hboMax)
        break;
    default:
        console.log("Opção Inválida")
        break;
}
