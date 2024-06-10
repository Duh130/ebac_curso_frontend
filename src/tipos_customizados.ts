type aluno ={
    nome: string;
    cursos:string[]
    idade : number;
}


const alunos =[
    {
        nome :"carlos",
        cursos: ["front-end","ux/ui"],
        idade :27,
    },

    {
        nome :"ana",
        cursos: ["front-end","python"],
        idade :23,
    }


]

alunos.push({
    nome :"ana",
    cursos: ["front-end"],
    idade :23,
})