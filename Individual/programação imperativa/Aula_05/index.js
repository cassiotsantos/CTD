// Aula 5 - introdução

/*

Nas funções podemos criar blocos de códigos que se repetem
e executar esses códigos sempre que necessário

*/

// function = função, depois disso, precisamos atribuir um nome à função e depois definir os parametros
// Function + nome da função + parametros + { as chaves são o escopo, mostra o inicio e fim do bloco}
// paramentros são informações que a função precisa para completar sua finalidade
// além disso, paramentros são variáveis que possuem escorpo local

/*function calculaImc (peso,altura,nome,idade) {
    const imc = peso/altura**2;
    console.log (nome + ' tem ' + idade + ' e possui uma massa corporal de ' + imc.toFixed(4))
}

calculaImc(80.1,1.76,'Carlos de Souza',28);
calculaImc(63.7,1.53,'Aline Ferreira',33);

console.log( Math.random() );

function cunprimentar(nome) {
 console.log('Olá ' + nome + ' seja bem vindo!');
}

cunprimentar('Cássio')

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
   }
   
   cumprimentarA("William")
   cumprimentarA("Danilo")*/

   function conversor (valor) {
         const cm = valor*2.54;
         console.log('O valor em centímetros é ' + cm )

   }

   conversor(5);

   function endereco () {
        const url = 'meusonho';
        let url2 = '!';
        console.log ('www.' + url + '.com.br'+ url2)

   }

   endereco();

   function calIdadeDog (ano) {
        const calculo = ano*7;
        let mensagem = 'Meu cachorro possui ';
        let mensagem2 = ' anos em idade humana!';

    console.log(mensagem+calculo+mensagem2)
   }

   calIdadeDog(3)

   function valorHoraTrbalho (hora = 0,valor = 0) {
        let horaDeTrabalho = hora ;
        let valorDetrabalho = valor;
        const totalHoraTrabalho = horaDeTrabalho*8;
        const totaldia = totalHoraTrabalho*valorDetrabalho;

    console.log('Meu dia de trabalho vale ' + totaldia+'.00')

   }

valorHoraTrbalho(160,30.00)






 