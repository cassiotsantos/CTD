class Pessoas {
    constructor(id, nome, sobrenome, idade){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

const bancoPe = {
    membros:[],
    adicionarMembro(id, nome, sobrenome, idade){
        const novaPessoa = new Pessoas(id, nome, sobrenome, idade);
        this.membros.push(novaPessoa);
    },

    buscarMembro(codigoMembro) {

       for(let membroBuscado of this.membros){
           if(codigoMembro === membroBuscado.id){
               return membroBuscado
           }
       }
    }
}





bancoPe.adicionarMembro(1, 'Cássio', 'Teixeira', 33);
bancoPe.adicionarMembro(2, 'Denis', 'Coelho', 30);
bancoPe.adicionarMembro(3, 'Lucia', 'Santos', 50);


console.log(bancoPe.membros);

console.log(bancoPe.buscarMembro(1));


    















// for (let index = 0; index < membros.length; index++) {
//     const cliente = array[index];    
// }

//for of ---- > apenas para array




