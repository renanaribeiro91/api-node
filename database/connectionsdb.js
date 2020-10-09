const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://renan:r83r86r91@teste.dbavf.mongodb.net/cadastroalunos?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{useNewUrlParser: true},(err,res)=>{
    if(!err){
        console.log('banco de dados conectado')
    }else{
            console.log('banco de dados não conectado'  +  err)
        }
    

});