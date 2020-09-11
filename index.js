const express = require('express');
const server = express();
const users = ['Danilo', 'Pedro', 'Brendo'];server.get('/users/:id', (req, resp)=>{
    const {id} = req.params;
    resp.json({msg: `Bem vindo ${users[id-1]}`});
});
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server runing');
});