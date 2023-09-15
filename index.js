//exercicios de interpretação de codigo
//const pessoa = {
    //nome: "Alice",
    //idade: 25,
   // temCarteiraDeMotorista: true
//}
//if (pessoa.idade >=18 && pessoa.temCarteiraDeMotorista) {
    //console.log(`${pessoa.nome} pode dirigir!`)
//} else {
    //console.log(`${pessoa.nome} não pode dirigir.`)
//}
//a) o codigo acima verifica se a pessoa tem acima de 18 anos e tem carteira de motorista, para dirigir.
//b)Sera impresso que ela pode dirigir quando ela tiver 18 anos ou mais, e tiver carteira de motorista, pelo contrario, aparecera não pode dirigir.

//leia o codigo a seguir:
//a)o objetivo deste codigo foi que, ele criou uma opçao para o animal ser carnivoro, e não ser carnivoro, dependendo do valor da variavel ,vai ser um ou outro.
//b)A mensagem impressa sera, "Leão é um animal carnivoro".

//leia o codigo a seguir
//a) Este codigo diz um numero, e cria duas opções para o verificar o numero, se ele é maior que 5, ou se ele é menor ou igual a 5.
//E tambem cria opçoes para verificar se o numero é impar ou par.
//b)"O numero é maior que 5" & "O numero é par".

//Exercicio escrita de codigo
//exercicio 1
let idade = Number(prompt("Qual a sua idade?"));
if (idade >= 18) {
    console.log("Voce é maior de idade")
} else {
    idade < 18
    console.log("Voce é menor de idade")
}
//exercicio 2
let turno = prompt("Qual turno você estuda? Digite 'M' para matutino, 'T' para tarde e 'N' para noturno.");
if (turno === 'M') {
    console.log("Bom dia!")
} else if (turno === 'T') {
    console.log("Boa tarde!")
} else if (turno === 'N') {
    console.log("Boa noite!")
} else {
    console.log("Turno não reconhecido")
}
//exercicio 3 passar o codigo de cima para Switch
let turnoEscola = prompt("Qual turno você estuda? Digite 'M' para matutino, 'T' para tarde e 'N' para noturno.");
switch (turnoEscola) {
    case 'M':
        console.log("Bom dia!")
        break;
    case 'T':
        console.log("Boa tarde!")
        break;
    case 'N':
        console.log("Boa noite!")
        break;
    default:
        console.log("Turno não reconhecido")
}
//exercicio 4
let aluno = {
    nome: "João",
    idadeAluno: 25,
    tipoDeCurso: "graduação",
    temBolsa: false
}
if (aluno.idadeAluno < 30 && aluno.tipoDeCurso === "graduação" && !aluno.temBolsa) {
    console.log("Você pode se candidatar a uma bolsa de estudos!")
} else {
    console.log("Desculpe, você não atende aos requisitos para a bolsa.")
}
//exercicio 5
let produto = {
    nome: "Camiseta",
    preco: 79.90,
    desconto: 5.00,
    freteGratis: true
}
let precoFinal = produto.preco - produto.desconto;
let mensagem = "Preço final: " + precoFinal.toFixed(2);

if (produto.desconto > 0 && produto.freteGratis) {
    mensagem += ("frete Gratis")
} else if (produto.desconto > 0) {
    mensagem += ("Desconto aplicado")
} else if (produto.freteGratis) {
    mensagem += ("Frete Gratis")
}
console.log(mensagem);
