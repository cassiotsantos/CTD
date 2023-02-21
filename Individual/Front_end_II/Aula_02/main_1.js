var usuarioDesejaJogar = confirm ('Você gostaria de jogar?')

function comecarJogo() {

    let = jogadaUsuario =  Number(prompt('O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'))
    let = jogadaOponente = Math.floor(Math.random() * 3) + 1

    console.log(jogadaOponente)
    console.log(jogadaUsuario)

    if (jogadaUsuario === 1 && jogadaOponente === 2) {

        prompt('Você perdeu!')
        
    } else {
        
    }
    
}

//function perguntaUsuarioDesejaJogar() {

if (usuarioDesejaJogar === true) {

    comecarJogo()
    
} else {

    alert('Obrigado por visitar a nossa página!')
    
}

//}

