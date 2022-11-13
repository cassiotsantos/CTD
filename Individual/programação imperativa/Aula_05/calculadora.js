
console.log ("-------------- Teste de Operações / Calculador --------------")
function adicionar (valor1 = 0,valor2 =0){
    const soma = valor1 + valor2;
    return soma;
}

function subtracao (valor1 = 0,valor2 = 0){
    const menos = valor1 - valor2;
    return menos;
}

function mutiplicacao (valor1 = 0,valor2 = 0){
    const multiplicar = valor1 * valor2;
    return multiplicar;
}

function divisao (valor1 = 0,valor2 = 0){
    const dividir = valor1 / valor2;
    return dividir;
    }

console.log('Valor soma: ', adicionar(1,1));
console.log('Valor subtração: ', subtracao(2,1));
console.log('Valor multiplicação: ', mutiplicacao(2,2));
console.log( 'Valor divisão: ', divisao(4,2));


function quadradoDoNumero (valor9){
    return mutiplicacao (valor9,valor9);
    
}

console.log ('Valor quadrado ', quadradoDoNumero(5));

function mediaDeTresNumeros( valor10,valor11,valor12) {
   // const somavalor10valor11 = adicionar (valor10,valor11);
   // const somamedia = adicionar (somavalor10valor11,valor12);
   // return divisao(somamedia,3);

    return divisao ( adicionar (adicionar(valor10,valor11),valor12),3)
}

console.log('Valor mediano: ', mediaDeTresNumeros(5,4,8).toFixed(2))

function calculaPorcentagem (valor13,valor14) {

    let mult = mutiplicacao (valor13,valor14);

    let divi = divisao (mult,100);
    
    return divi
 
}

console.log ('Valor porcentagem', calculaPorcentagem(300, 15)) 



//let somarOResultado = retornoAdicionar+retornoDivisao; console.log(somarOResultado);

/*let funcaoExpressa = function (valor1,valor2,valor3,valor4,valor5,valor6,valor7,valor8) {

    const soma = valor1 + valor2;
    const divisao = valor3 / valor4;
    const multiplicao = valor5 * valor6;
    const subtracao = valor7 - valor8;
    return soma, divisao, multiplicao, subtracao;

};

let resultFunc = funcaoExpressa(1,2,8,4,5,5,50,5);
console.log(resultFunc);*/

