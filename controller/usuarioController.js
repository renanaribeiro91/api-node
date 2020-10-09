const mongoose = require('mongoose'); // instanciando DB
const Usuariomodel = mongoose.model('usuarios'); // importando modelo de banco de dados

module.exports = {
  async CreateUser(req, res){
    const body = req.body
    const newUserObj= {
   nome: body.nome,
   idade:body.idade,
   nota:body.nota,
     }
     console.log(newUserObj)
   const newUser =  await Usuariomodel.create(newUserObj)
   return res.send(newUser)

   },
   async findUser(req,res){
     const params = req.params
    const user = await Usuariomodel.findOne({nome : params.nome}) //find metodo para buscar 
    const nota = user.nota
      return res.send({user}) // res.send so envia objeto {}
   },
   async saveUser(req,res){
     const params = req.params
    const user = await Usuariomodel.findOne({idade : params.idade}) //find metodo para buscar 
    user.nota = 12
    await user.save()  // user passou a ser objeto recebendo usuariomodel
        return res.send({user}) // res.send so envia objeto {}
   }
   
   
} 