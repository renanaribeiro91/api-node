const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const requieredir = require('require-dir');
const bodyparser = require('body-parser')


require('./database/connectionsdb'); // iniciando db
requieredir('./src/models'); // modelos db
const app = express(); // iniciando servidor
app.use(bodyparser.json());

// rota de cadastros aluno
const Rota1 = require('./routes/routes');
app.use('/sistema', Rota1);




const port = 8080
app.listen(port, () => {
    console.log("O servidor esta on no git na porta 8080")
});

// 1 - Criar um servidor para um colegio, vao ter 3 rotas, uma de cadastro de aluno,
// 2 - Aluno : nome, idade e nota
//uma de cadastro de nota daquele aluno e uma para pegar todas as notas daquele aluno
// criar um metodo para retornar tudo que tem no banco e um metodo pra deletar um nome especifico


/* create // é um metodo do mongoose que cria um novo registro/documento
find  // é um metodo que acha retorna todos os documento
findOne //  é um metodo que retorna um documento
update // é um metodo que atualiza um registro direto pelo banco de dados
save // é um metodo que atualiza um registro direto pelo banco de dados
delete // é um metodo que deleta os documentos do banco de dados */
