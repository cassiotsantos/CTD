// let pais = {

//     nome: 'Brasil',
//     capital: 'Brasilia',
//     meuNome: function (name) {
//        let gravarNome = name
//        return 'Meu nome é ' + name + ',';  
//     }
// };

// //console.log('O nome do meu pais é ' + pais.nome + ' e a capital é ' + pais.capital);

// console.log(pais.meuNome('Cássio') + ' eu sou do ' + pais.nome + ' e a sua capital é ' + pais.capital)

// function Paises (nomePais,nomeCapital) {   

//  this.pais = nomePais;
//  this.Capital = nomeCapital;

// }

// let = adicionarPais = new Paises('Brasil', 'Brasilia');
// let = adicionarPais2 = new Paises('França', 'Paris');
// console.log (adicionarPais,adicionarPais2);


// let pessoa = {


//     nome: 'cassio',
//     idade: 33,
//     altura: 1.80
// }

// let json = JSON.stringify(pessoa);

// console.log(json);

// let objetoDeNovo = JSON.parse(json);

// console.log(objetoDeNovo);

// let listaCompras = ['Pao', 'presunto','queijo']

// let membros =[]

// let pessoa1 = {

//     nome:'Cássio',
//     sobrenome:'Teixeira',
//     idade: 33
// };


// let pessoa2 = {

//     nome:'Denis',
//     sobrenome:'Coelho',
//     idade: 30
// };

// let pessoa3 = {

//     nome:'Lucia',
//     sobrenome:'Santos',
//     idade: 55
// };

// membros.push(pessoa1);
// membros.push(pessoa2);
// membros.push(pessoa3);

// console.log(membros);

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a)