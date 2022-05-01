var amazon = {
    nome: "Amazon Prime",
    mensalidade: "R$9.90",
}

var netflix = {
    nome: "Netflix",
    mensalidade: "R$50.90",
}

var hboMax = {
    nome: "HBO Max",
    mensalidade: "R$30.90",
}

var disney = {
    nome: "Disney Plus",
    mensalidade: "R$29.90",
}

var op = "D";

switch(op){
    case "A":
        console.log(amazon)
        break;
    case "N":
        console.log(netflix)
        break;
    case "H":
        console.log(hboMax)
        break;
    case "D":
        console.log(disney)
        break;
    default:
        console.log("Opção Inválida")
        break;
}

