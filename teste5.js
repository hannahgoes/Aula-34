var numero = 10
var resultado;

var opcao = '+'

switch(opcao){
    case '*':
        resultado = numero * numero;
        break;
    case '+':
        resultado = numero + numero;
        break; 
    default:
        console.log("Opção Inválida")
        break;
}

console.log(resultado)