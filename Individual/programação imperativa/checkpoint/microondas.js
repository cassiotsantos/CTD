console.log (
        `
        Selecione o tempo de aquecimento:

        1 - Pipoca – 10 segundos
        2 - Macarrão – 8 segundos
        3 - Carne – 15 segundos
        4 - Feijão – 12 segundos
        5 - Brigadeiro – 8 segundos 
        `
)

function microondas (opcao,tempo) {

        // váriveis com a marcação de tempo para preparo da comida

        const tempoPipoca = 10
        const tempoMacarrao = 8
        const tempoCarne = 15
        const tempoFeijao = 12
        const tempoBrigadeiro = 8

         // váriveis para opção no menu

        const opcaoPipoca = 1
        const opcaoMacarrao = 2
        const opcaoCarne = 3
        const opcaoFeijao = 4
        const opcaoBrigadeiro = 5

         // Controle de fluxo para cada situação

        if (tempo === tempoPipoca && opcao === opcaoPipoca) {
                return 'Comida no ponto'}
        
                else if (tempo <= tempoPipoca-1 && opcao === opcaoPipoca) {
                return 'Tempo insuficiente'}
        
                else if (tempo >= tempoPipoca && tempo <= tempoPipoca*2 && opcao === opcaoPipoca) {
                return 'Sua comida queimou' }
        
                else if (tempo >tempoPipoca*2 && tempo > tempoPipoca*3 && opcao === opcaoPipoca) {
                return 'kabumm' }

                
         if (tempo === tempoMacarrao && opcao === opcaoMacarrao) {
                return 'Comida no ponto'}
        
                else if (tempo <= tempoMacarrao-1 && opcao === opcaoMacarrao) {
                return 'Tempo insuficiente'}
        
                else if (tempo >= tempoMacarrao && tempo <= tempoMacarrao*2 && opcao === opcaoMacarrao) {
                return 'Sua comida queimou' }
        
                else if (tempo > tempoMacarrao*2 && tempo > tempoMacarrao*3 && opcao === opcaoMacarrao) {
                return 'kabumm' }


        if (tempo === tempoCarne && opcao === opcaoCarne) {
                return 'Comida no ponto'}
        
                else if (tempo <= tempoCarne-1 && opcao ===opcaoCarne) {
                return 'Tempo insuficiente'}
        
                else if (tempo >= tempoCarne && tempo <= tempoCarne*2 && opcao === opcaoCarne) {
                return 'Sua comida queimou' }
        
                else if (tempo > tempoCarne*2 && tempo > tempoCarne*3 && opcao === opcaoCarne) {
                return 'kabumm' }


          if (tempo === tempoFeijao && opcao === opcaoFeijao) {
                return 'Comida no ponto'}
        
                else if (tempo <= tempoFeijao-1 && opcao === opcaoFeijao) {
                return 'Tempo insuficiente'}
        
                else if (tempo >= tempoFeijao && tempo <= tempoFeijao*2 && opcao === opcaoFeijao) {
                return 'Sua comida queimou' }
        
                else if (tempo > tempoFeijao*2 && tempo > tempoFeijao*3 && opcao === opcaoFeijao) {
                return 'kabumm' }

        if (tempo === tempoBrigadeiro && opcao === opcaoBrigadeiro) {
                return 'Comida no ponto'}
        
                else if (tempo <= tempoBrigadeiro-1 && opcao === opcaoBrigadeiro) {
                return 'Tempo insuficiente'}
        
                else if (tempo >= tempoBrigadeiro && tempo <= tempoBrigadeiro*2 && opcao === opcaoBrigadeiro) {
                return 'Sua comida queimou' }
        
                else if (tempo > tempoBrigadeiro*2 && tempo > tempoBrigadeiro*3 && opcao === opcaoBrigadeiro) {
                return 'kabumm' }

                else { `Nenhuma opção selecionada` 

                }

}

let execucao =  microondas (4,40)
console.log(`
 
        Prato pronto, bom apetite!!!

        ${execucao}
 
        `)