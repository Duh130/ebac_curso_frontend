
const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.8 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Pedro', nota: 4.3 },
    { nome: 'Carlos', nota: 8.1 }
];


const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};


const aprovados = alunosAprovados(alunos);
console.log(aprovados);
