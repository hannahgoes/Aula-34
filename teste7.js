//Variável do tipo Objeto
var pessoa = {
    nome:"Cassiano",
    idade: 32,
    estudante: true
}
//Switch case que escolhe entre duas possibilidades de opções
switch(pessoa.estudante){
    case true: 
        console.log("Estudante")
        break;
    case false:
        console.log("Graduado")
        break;
    default:
        console.log("Aluno não cadastrado")
        break;
}
