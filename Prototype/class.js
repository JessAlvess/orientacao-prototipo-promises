class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`);
    }

}

const jesse = new Pessoa('Jessé', 29)

jesse.falar()


// criando instancia com object.create() através de um objeto literal 
const menina = {
    idade: 2
}
const catarina = Object.create(menina)
catarina.nome = 'Catarina'
console.log(catarina.idade);