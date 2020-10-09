const express = require('express');
const routes = express.Router();

const usuariocontrol = require("../controller/usuarioController")



// routes.get("/usuario", usuariocontrol.CreateUser);
 routes.post('/usuario/create', async (req,res)=>{
 return await usuariocontrol.CreateUser(req,res);
 });

 routes.get('/usuarios/:nome', async (req,res)=>{
    return await usuariocontrol.findUser(req,res);
    });

    routes.put('/usuarios/save', async (req,res)=>{
        return await usuariocontrol.saveUser(req,res)
    })
module.exports = routes;




