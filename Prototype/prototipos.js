const pessoa = {
    genero: 'masculino',
    uf: 'Paraná'
}

const jesse = {
    nome: 'Jessé',
    sobrenome: 'Alves',
    idade: 29,
    __proto__: pessoa
}

console.log(jesse.uf);