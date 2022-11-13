// Aula-04 - introdução ao JS - para rodar os códigos vamos usar o Node JS.

// para rodar o JS fora do navegador, usamos o Node JS, para que possamos testar e usar no backend.  

// o JS rodar no chrome pelo V8 Engine 

/*
Linguagem da programação é uma grande calculadora, usada para otimizar tarefas
automatizar processos.

Pensando nisso, o JS possui os Operadores matemáticos
*/

console.log ("Olá mundo!") // usamos para visualizar o nosso código - console é um módulo e log é o metódo.

/*   Tipo primitivos de dados

Number - é uns dos tipos primitivos de dados, podendo ser:
números inteirios ou ponto flutuante Ex: 1,2, 5.5, 3.14, etc.


String (texto) - engloba todas as cadeias de caracteres (texto)

booleano - True ou False

underfined - não definido - ele pode ser um tipo primitivo de dado ou valor
ou seja, tudo o que não for definido no JS será underfined (não existe ainda, não foi definido)

null - Nulo (um valor que está nulo, não existe)

*/

/* operadores matemáticos

+ - soma
- - subtração
* - multiplicação
/ - divisão exata  Ex. 5/2 = 2.5
% - resto da divisão Ex. 5/2 = 1 (2*2 + 1)
** - Exponenciação Ex. 2**3 = 8 (2*2*2 = 8)
*/

console.log (1+20)
console.log(20-15)
console.log(10*4)
console.log(5/2)
console.log(26%9) // usado muito em criptografia 
console.log(5**2)

console.log ('1'+ 1) // para esse caso, ele retorna como string ao imprimir os dados

/*
Concatenação = ocorre em uma string quando ele junta tudo em uma string só, no exemplo abaixo:

console.log ('1'+ 1)  

no lugar de somar 1+1, como o primeiro número está entre aspas simples, ele vai entender que é uma conccatenação
e vai unir os números no lugar de somar. formando uma string.
*/

console.log ('1'- 1) // para esse caso o JS vai tentar forçar o cálculo da operação.
console.log ('10a'- 1) // para esse caso o JS vai retornar o valor de NaN

/*
NaN - Not A Number - não é um número, ou seja, ele vai tentar fazer o cálculo, senão conseguir
vai retornar como NaN, permitindo que possamos prosseguir com a trativa de erro.
*/

console.log ('Olá' + 'Mundo')

/*

Variáveis - armazenar alguma informação na memória do computador

Segue as palavras reservadas da variavel:

let -  podemos alterar, em tempo de execução, com o let e o var o valor das variáveis
const - variavel que não pode ter o seu valor trocado ex.: podemos usar para CPF, marcar tempo, data de nasc
var - podemos alterar, em tempo de execução, com o let e o var o valor das variáveis / ele é mais antigo, podemos encontrar
ele em um sistema legado. / Ele possui uma visibilidade global, ou seja, o JS sempre vai colocar o VAr no topo
essa ação tem o nome de hoisting 

*/

let primeiraVariavel = 5 // indo na memória do computador e armazenando o valor definido
console.log(primeiraVariavel) // depois ele vai na memória para imprimir o  valor

const CPF = 38652402833;
//CPF = 38459585;
console.log(CPF)


console.log(segundaVariavel);
var segundaVariavel; // retorna como undefined

{
// Let - não permite ser acessado antes da inicialização
// Let - só vai exitir onde ele foi declaro, ou seja, dentro do bloco de código (escopo onde foi declarado)

let x = 5;
console.log(x); 

}


{

// Var - pode ser executado fora do escopo que ele foi declarado
// Var- possui visibilidade global, sempre aparece no topo
// var - pode ser acessado antes da inicialização - só que o Var não possui valor, ele retorna como undefined

console.log(x); 
var x = 5;

}


// observação: ao comparar Let e Var, é melhor usar o Let, já que o Var permite executar mesmo quando estiver fora do escopo



