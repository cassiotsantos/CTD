// Aula 08 - controles de fluxo 

/*
 if/else 
 if/else aninhado
 switch case
 /if/else ternário

 podemos usar esses comenando para fazer o controle de fluxo da aplicação. 
 determinando a direção que o nosso código irá tormar.
*/

let media = 7.5;
let qtdFaltas = 3;

media => 7 && qtdFaltas <= 3 / // Aprovado

// if -> - > Caso algo seja verdadeiro então faça alguma coisav- essa condição sempre vai puxar o verdadeiro
// else -> Caso contrário faça alguma outra coisa - essa condição sempre vaai puxar o falso

if (/*condicição  */ media > 7 && qtdFaltas <=3){

        console.log("Aluno Aprovado");

    } else if (media >= 5 && qtdFaltas <= 3) {
        console.log ("Aluno recuperação")
        // o else não é obrigatório, podemos usar ele sim ou não
    } else {
        console.log ('Aluno reprovado ')
    }

/*
 fluxo aprovação
 fluxo reprovação

    fluxo reprovação ausência
        fluxo de asuência justificada
        fluxo ausência não justificada
    fluxo reprovação por nota

 fluxo recuperação

*/


/* switch case - trabalha apenas com o operador de igualdade

Escolhe alguma coisa
  - caso seja x -> Faça alguma coisa

  - caso sseja y -> faça alguma outra coisa

  - caso não seja nenhuma das opções acima, faça alguma outra coisa

  segue um exemplo abaixo de como usar um switch case: olhar o arquivo cardapio.js
*/



/*

readline sync, permite receber entradas digitais no terminal do node js

https://www.npmjs.com/package/readline-sync

para instalar o npm no projeto, siga os passos abaixo:

1 - acessar o site readline

2 - no terminal, acessar a pasta do projeto

3 - digitar >> npm init --yes e pressionar Enter para iniciar o npm

4 - ira gerar um arquivo chamadp pachage.json (nesse arquivo você encontra algumas informações do projeto)

5 - feito isso, vá no site redeline e copiar o código de instalação da página (ex.: npm i readline-sync )

6 - retorne para o terminal e digite o comando de instalação e pressione enter novamente

7 - Irá baixar os arquivos referentes ao npm para dentro da pasta do seu projeto, criando uma pasta
    chamada node_modules + um arquivo chamado package-lock.json




*/







