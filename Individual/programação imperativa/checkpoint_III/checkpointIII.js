function aprovadoReprovado(aluno){
    if(aluno.calcularMedia() >= curso.notaDeAprovacao && aluno.qtdFaltas < curso.faltasMaximas){
        return true;
    }else if(aluno.calcularMedia() >= curso.notaDeAprovacao && aluno.qtdFaltas == curso.faltasMaximas){
        if(aluno.calcularMedia() > (curso.notaDeAprovacao+(curso.notaDeAprovacao*0.1))){
            return true;
        }
        return false;
    }
    return false;
}


function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let media = 0
        /*for (let i = 0; i < this.notas.length; i++) {
            const resultado = this.notas[i];
            media += resultado;
        } */
        for (let i of this.notas) {
            media += i;
        }
        return (media / this.notas.length).toFixed(1);
    }
    this.faltas = function () {
        this.qtdFaltas++;
    }

}

const curso = {
    nomeDoCurso: 'História',
    notaDeAprovacao: 6,
    faltasMaximas: 10,
    listaDeEstudantes: [],
    adicionarAluno (nome, qtdFaltas, notas) {
        const aluno = new Aluno(nome, qtdFaltas, notas);
        this.listaDeEstudantes.push(aluno)
    },
    resultadoAluno(nomeAluno){
        for (let aluno of this.listaDeEstudantes){
            if(aluno.nome == nomeAluno){
                return aprovadoReprovado(aluno);
            }
        }
        
    },
    resultados(){
        const alunosResultados = [];
        for (let aluno of this.listaDeEstudantes){
            alunosResultados.push(this.resultadoAluno(aluno.nome));
        }
        return alunosResultados;
    }

}

curso.adicionarAluno("Cássio Teixeira dos Santos", 11, [10, 7, 10]);
curso.adicionarAluno("Denis Silveira Coelho", 1, [9, 6, 9]);
curso.adicionarAluno("Maria Lucia dos Santos", 3, [8, 10, 7]);

console.log(curso.resultadoAluno("Cássio Teixeira dos Santos"));
console.log(curso.resultadoAluno("Denis Silveira Coelho"));
console.log(curso.resultadoAluno("Maria Lucia dos Santos"));

console.log(curso.resultados());