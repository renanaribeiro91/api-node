const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.send('Ola Git')
})


app.listen(8080, () => {
    console.log("O servidor esta on no git na porta 8080")
})