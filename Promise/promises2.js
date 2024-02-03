const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDoArquivoTarefas = fs.promises.readFile(filePath)

promessaDoArquivoTarefas
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => console.log(textoDoArquivo.split('\n')))
    .catch((error) => console.log('Não achei', error))