let pessoa = {

    nome: 'Cassio',
    idade: 33,
    altura: 1.75
}



let listaCompras = ['pão', 'presunto', 'queijo']
let json = JSON.stringify(listaCompras);
let ArrayDeNovo = JSON.parse(json)
console.log(ArrayDeNovo);



let json = JSON.stringify (pessoa);

console.log(json);

let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);

