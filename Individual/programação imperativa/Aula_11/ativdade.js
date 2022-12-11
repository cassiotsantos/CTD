

//const notas = [7.5,9,6.4];

/* Acessar elementos específicos de um array.

console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]); // retorna undefined

//Modificar cada um dos elementos de um array e imprimi-los no console.

notas[0] = 5.5
notas[1] = 8.9
notas[2] = 9.0
notas[3] = 6.5 
// no exemplo esse Array [3] não existe, mas é possível adicionar um novo elemento ao fazer isso
// só que não é recomendável pq pode ser ruim devido o índice
//quando usamos o length ele retorna esse campo adicional como undefined

console.table(notas.length)

// Adicionar elementos a um array.

notas.push(10) // adiciona no final
notas.unshift(6) // adiciona no inicio
console.log(notas)

// Extrair elementos de um array.

notas.pop() // remove no final
notas.shift() // remove no inicio

//Comparar elementos de um array com os elementos de outro. 

let participanteA = [5,8,8.7]
let participanteB = [6.5,7,9]

if (participanteA[0] > participanteB[0]) {

    return 'Ponto para o participante A na primeira Rodada'
} else {

return ' Ponto para o participante B na primeira rodada'

};

*/
// Array invertido 

function imprimirInverso(array = []){
    const novoArray = [];
    novoArray[0] = array[3];
    novoArray[1] = array[2];
    novoArray[2] = array[1];
    novoArray[3] = array[0];
    console.log(novoArray);

}

const nomes=['Cássio','Denis','Lucia','Erica']
imprimirInverso(nomes)




