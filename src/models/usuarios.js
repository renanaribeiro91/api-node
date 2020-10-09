const mongoose = require('mongoose')

// modelo de tabela de banco de dados
const UsuarioSchema = new mongoose.Schema({

        nome:{
            type:String,
            require: true,
        },
        idade:{
            type: Number,
            required: true,
        },
        nota:{
            type: Number,
            required: true,
        },
        createAt:{
            type:Date,
            default:Date.now,
        },
    
    })
    
    module.exports =  mongoose.model('usuarios', UsuarioSchema);
