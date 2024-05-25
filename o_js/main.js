class Veiculo {
    constructor(marca, modelo, ano) {
        if (this.constructor === Veiculo) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }

    ligar() {
        throw new Error("Este método deve ser implementado pela subclasse");
    }

    desligar() {
        throw new Error("Este método deve ser implementado pela subclasse");
    }
}

class Carro extends Veiculo {
    ligar() {
        return `O carro ${this.descricao()} está ligado.`;
    }

    desligar() {
        return `O carro ${this.descricao()} está desligado.`;
    }
}

class Moto extends Veiculo {
    ligar() {
        return `A moto ${this.descricao()} está ligada.`;
    }

    desligar() {
        return `A moto ${this.descricao()} está desligada.`;
    }
}


const carro1 = new Carro("Toyota", "Corolla", 2021);
const carro2 = new Carro("Honda", "Civic", 2022);
const moto1 = new Moto("Yamaha", "MT-07", 2020);


console.log(carro1.ligar());
console.log(carro2.desligar());
console.log(moto1.ligar());
