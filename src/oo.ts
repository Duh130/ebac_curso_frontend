class Pessoa {
    nome:string;
    renda?: number

constructor(nome:string,renda?:number){
    this.nome = nome;
    this.renda =renda;
}

dizOla(): string{
        return `${this.nome}`
}

class CotaBancaria{
    private saldo :number =0
}


}