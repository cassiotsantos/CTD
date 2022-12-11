  for (let i= 1; i <=10; i +=2  ) {
    console.log( i)
}



let meuPais = {

    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasilia",
    dizerNacionalidade: function () {
        return "Nasci em " + this.nome;


    }
};

console.log(meuPais.dizerNacionalidade()) ;


let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valorMarcar, valorModelo) {
    this.marca = valorMarcar;
    this.modelo = valorModelo
}

console.log(carro)
console.log( new Carro("Renault", "Clio"));
