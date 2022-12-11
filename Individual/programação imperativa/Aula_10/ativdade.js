/*let listaCompras = ['Arroz','Feijão','Ovos'];
listaCompras.join('-');
listaCompras.push('Macarrão');
listaCompras.pop();
listaCompras.shift();
listaCompras.unshift('Óleo');

console.log(listaCompras);
console.log(listaCompras[0]);*/

/*let arrayAtividade = ['Segunda','Terça'];
//arrayAtividade.push('Primeira atividade');
console.log(arrayAtividade);
console.log(arrayAtividade[0.replace('Segunda','Quarta')]);*/

let str = "uma string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])  
// ele retorna o último elemtno do aarray pq estamos usando o código  [grupoDeAmigos[2].length - 1]

let nome = [];
nome.push('Pedro');
nome.push('Abel');
nome.unshift('Luana');
nome.pop()
nome.replace([0],'Cássio')

console.table(nome)