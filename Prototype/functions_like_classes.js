function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.apresentar = function () {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
}

const jesse = new Pessoa('Jessé', 29)

console.log(jesse);
console.log(jesse.apresentar());
