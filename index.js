const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "fpsantos86@hotmail.com" } 

server.get('/users/:id',(req,res)=>{
    const id = req.params.id;

    return res.json({message:`Buscando o usuário ${id}`});
})

server.listen(3000);

