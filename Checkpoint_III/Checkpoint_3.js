/* 
Feito em grupo com os seguintes integrantes:
Anderson Borges
Dylan Tokumoto
Felipe Godoy
Matheus Emanoel 
*/

// Programação Imperativa - Checkpoint III

// Passo 1:
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    // Passo 2:
    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];

        }
        return soma / this.notas.length
    }

    this.faltasTot = function () {
        return this.faltas++
    }
    
}

// Continuação do passo 2
const aluno1 = new Aluno("Linux", 1, [1, 2, 4, 8]);
const aluno2 = new Aluno("Zuckenberg", 1, [8, 7, 7, 9]);
const aluno3 = new Aluno("Steve", 6, [8, 8, 8, 8]);
const aluno4 = new Aluno("Jobs", 1, [6, 5, 5, 8]);
const aluno5 = new Aluno("Bob", 0, [10, 10, 10, 10]);

// Teste de funcionamento das funções do Passo 2
console.log(aluno1.calcularMedia());
console.log(aluno1.faltasTot());


// Passo 3
var alunos = [
    aluno1,
    aluno2,
    aluno3,
    aluno4,
    aluno5,
];

let curso = {
    nomeCurso: 'CTD',
    notaAprovacao: 7,
    faltasMax: 2,
    estudantes: alunos,

    // Passo 4
    criaAluno: function (nome, faltas, notas) {
        alunos.push(new Aluno(nome, faltas, notas))
        return this;
    },

    // Passo 5
    buscarAluno: function (nome) {
        const porcentagem = ((this.notaAprovacao * 10) / 100)
        if (
            (nome.calcularMedia() >= this.notaAprovacao) &
            (nome.faltasTot() < this.faltasMax)
        ) {
            return true;
        } else if (
            (nome.calcularMedia() > this.notaAprovacao + porcentagem) &
            (nome.faltasTot() == this.faltasMax)
        ) {
            return true;

        }
        return false;
    },

    // Passo 6
    resultadoAluno: function () {
        var resultado = []
        for (let i = 0; i < this.estudantes.length; i++) {
            var aluno = this.estudantes[i].nome
            resultado.push(aluno)
            resultado.push(this.buscarAluno(this.estudantes[i]))
        }
        return resultado
    }

}


// Teste de funcionamento para o Passo 4
curso.criaAluno("Junin", 0, [10, 7, 8, 9]);


// Teste de funcionamento para o passo 5
console.log(curso.buscarAluno(aluno1));


//  Teste de funcionamento para o passo 6
console.log(curso.resultadoAluno());