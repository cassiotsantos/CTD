// Aula - 12 estruturas de repetição : while / do while / for

// usar esses recurso para otimizar o tempo e não precisar ter que fazer tudo na mão

// while ----> enquanto :  enquanto alguma condição for verdadeira repetirei algum bloco de código
// toda essa estrutura de repetição terá um critério de aprada (condicional)


/*while (true) {

console.log ('MEu primeiro laço de repetiçao? ')
}*/

// o que acontece no código acima? 
// R: Ele vai entrar em um loop infinito e para encerrar é preciso digitar ctrl + c no terminal



/*let contador = 0
while ( contador<= 10 ){

    console.log ('Contatando...', contador);

    contador ++; // adiciona 1 na variavel
   // contador = contador + 1; / // adiciona 1 na variável, podendo alterar o número para adicionar mais que 1
   // contador += 1; // adiciona 1 na variável, podendo alterar o número para adicionar mais que 1
   // o incrimento é sempre a última parte na estrutura de repetição 

}*/



// do while -----> faça alguma coisa enquanto algo for verdadeiro, ou seja, pelo menos uma vez o bloco de código será executado mesmo se ele for falso


/*do {

    console.log ('Contatando...', contador);

    contador ++;

} while ( contador <= 10 ) */


// For ----> Para um critério inicial, até uma determina condição e um passo  (incremento ) de x faça alguma coisa

//for (declaração de variável;condição;incremento)


/*for ( let contador =0; contador <= 10; contador++) {
    console.log ('Contatando...', contador);

}*/

/*function soma (num1,num2) {

   return num1 + num2 ;


}*/
             // 0  1  2   3   4  5
let numeros = [10,15,20.5,30,40,80];
let soma = 0
for( let indice = 0; indice < numeros.length;indice ++) {
// para o indice 0 até o tamanho máximo de elementos do array vou fazer algo e incrementar o índice de 1 em 1
// numeros.length - vai retornar  tamanho de elementos do array = no exemplo acima, temos  5 array
/*
índice = 0 ; 0 < 6 --> true ; numeros [inndice] = 10
índice ++
índice = 1 ; 1 < 6 --> true ; numeros [indice] = 15
índice ++
índice = 2 ; 2 < 6 --> true ; numeros [indice] = 20.5
índice ++
índice = 3 ; 3 < 6 -- > true ; numeros [índice] = 30
índice ++
índice = 4 ; 4 < 6 -- > true ; numeros [índice] = 40
índice ++
índice = 5 ; 5 < 6 -- true ; numeros [indice] = 80
índice ++
índice == 6 ; 6 < --> false

encerra o lop

*/

console.log ('valor da soma' + soma);
const numero = numeros[indice]
soma += numero;

}

console.log ('valor da soma ' + soma)






    
