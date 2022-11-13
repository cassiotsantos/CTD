/*let soma = (1+2);
let restoDivisao = (235%93);
console.log('a soma total é de ' + soma + ' e o resto da divisão foi ' + restoDivisao)*/

/*let num1 = 5
    num1 = '1'
    num1 = 'olá'
let num2 = 10
    num2 = 1
    num2 = 23
let total = num1+num2
console.log(total)

let revert = total
console.log(revert)

let nomeCompleto = 'José da Silva'
let idade = 27
let peso = 83.5
let altura = 1.70
let plano = true
let massaCorporal = peso/altura**2
console.log(nomeCompleto + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + massaCorporal.toFixed(2))*/
 
function massaCorp (nome,idade,peso,altura) {
    const imc = peso/altura**2;
    console.log (nome + ' tem ' + idade + ' anos e sua índice de massa corporal é de ' + imc.toFixed(2))

}

massaCorp('Cássio Teixeira',33,107.4,1.77);
massaCorp('Denis Silveira',30,102,1.78);