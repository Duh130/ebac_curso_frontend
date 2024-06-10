"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome}`;
    }
}
class CotaBancaria {
    constructor() {
        this.saldo = 0;
    }
}
