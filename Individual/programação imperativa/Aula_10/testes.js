function processoBot(naoquerseguir,nome) {

let clienteFalou = naoquerseguir

if (clienteFalou.includes('Não')) {
    return nome + 'Espero ter ajudado! Precisando de novo pode contar comigo :)'
}

 else {    return `    Ops!
    Vamos tentar de novo ` + nome + '?' + `    
    Escreva a sua dúvida novamente!`}};

let retornobot = processoBot('Sim quero, obrigado!','Cássio');
console.log(retornobot);