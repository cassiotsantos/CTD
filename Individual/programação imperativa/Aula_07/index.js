// Aula -07 

// Operando logicamente

/*

Booleano -> true/fase

*/

//Operador: maior
5 > 3 ->//  true // 5 é maior do que o 3? -> Sim 0 5 é maior -> true/verdadeiro

//Operador> menor
1 < 2 -> // true 

//Menor ou igual
6 <= 5 // false

//Maior ou igual
3 >= 2 // true

// igualdade dupla -> não compara o tipo do dado, apenas o seu valor
2 == 2 // true //e se for 2 = '2'  também será true

// igualdade tripla (estritamente igual) -> compara o tipo e o valor do dado
2=== '2'//False

// diferente duplo
2!= '2' // false

//diferente tripla (estritamente igual)
2!== '2' // true

//negação - não tem limite para fazer a negação, porém, ela acaba retornando ao começo
!true  //false - negação é sempre o contrario, ou seja, o verdadeiro vira falso
!!false //false
!!!true //false


// = -> atribuição

//&& -> and -> E

let a = 'hoje vai chover';
let b = 'hoje vou dar aula';

// a && b -> quer dizer que hoje vai chover e eu vou dar aula
// Se umas das expressões não acontecer, ele vai retornar como false
// Ou seja, se uns dos lados for falso, ele vai retornar como false
// Isso quer dizer que os dois lados precisam ser verdadeiro

1 > 5 && 8 < 10 // a expressão vai retornar como false



// || -> OR -> OU

let a = 'hoje vai chover';
let b = 'hoje vou dar aula';

// Diferente do &&, o OR irá retornar como true apenas se uma dos lados forem verdadeiro
// para esse caso, só vai retornar falso se ambos os lados forem falsos
// ou seja, se uns dos lados for verdadeiro, a expressão será considerada true


1 < 2 || 5 > 3 // true


// Falsy e truthy  - são valoress que algumas variavéss possuem de forma intriscica


0 // tem um valor de falso, qualquer outro valor será considerado verdadeiro

-1 // já retorna como valor de true

'' // string vazia é falso

'abc'// string com texto é verdadeiro

undefined // é falso

null // Falso 

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy


