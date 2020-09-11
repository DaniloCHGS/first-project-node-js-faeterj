const express = require('express');
const server = express();
server.get('/users/:id', (req, resp)=>{
    const {id} = req.params;
    resp.json({msg: `Bem vindo ${id}`})
});
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server runing');
});