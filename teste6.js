var idade = 12
var maior;

//Operador ternário que atribui o valor "true" para a variavel maior caso a idade seja maior ou igual a 18 anos, caso a idade seja menor atribui "false"
maior = (idade >= 18? true : false)
console.log(maior)

//Operador ternário que escreve "Pode dirigir" para o caso da variável maior ter o valor 'true' e escreve "Não pode dirigir" caso a variável seja 'false'
maior == true ? console.log("Pode dirigir") : console.log("Não pode dirigir")

//Condicional "if/else" que escreve "Pode dirigir" para o caso da variável maior ter o valor 'true' e escreve "Não pode dirigir" caso a variável seja 'false'
// if (maior){
//     console.log("Pode dirigir")
// }else{
//     console.log("Não pode dirigir")
// }