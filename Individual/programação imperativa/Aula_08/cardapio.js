/*


*/

// Template strings 
// obs.: quando colocamos o sinal de crase  >>  `abc`  << , podemos fazer uma quebra de texto

// Com o template strings, o JS permite acessar a variável dentro da string.
// para isso, devemos escrever o código da seguinte forma >> ${nome da variável que queremos} << dentro da string

//let teste = 5

// apenas para efeito de comaração quando tínhamos que concatenar

//let concantenar = teste + 'minhastring';
//let templateString = `${teste} minha string`;

var readlineSync = require('readline-sync');
console.log (`


    Bem-vindo ao nosso cardápio digital:

    Temos as seguintes opções:

    1 - Pizza
    2 - Hamburguer
    3 - Batata-frita
    4 - Lasanha
    5 - Acarajé
    6 - Arroz, feijão e ovo frito
    7 - Tapioca recheada

`);

let opcao = readlineSync.question('Escolha uma opção:');
console.log(`Sua opção escolhida foi: ${opcao}`);

switch (opcao){

    case '1':
        console.log ("Pizza");
        break
    case '2':
        console.log ('Hamburguer');
        break
    case '3':
        console.log ('Batata-frita');
        break
    case '4':
        console.log ('Lasanha');
        break
    case '5':
        console.log ('Acarajé');
        break
    case '6':
        console.log ('Arroz, feijão e ovo frito');
        break
    case '7':
        console.log ('Tapioca recheada');
        break
    default:
        console.log ('Opção selecionada inválida');    

}



/*

readline sync, permite receber entradas digitais no terminal do node js

https://www.npmjs.com/package/readline-sync

*/