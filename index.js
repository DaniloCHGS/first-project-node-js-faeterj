const express = require('express');
const server = express();
server.use(express.json());
const users = ['Danilo', 'Pedro', 'Brendo'];

//Read - lista
server.get('/users/:id', (req, resp)=>{
    const {id} = req.params;
    resp.json({msg: `Usuário: ${users[id-1]}`});
});
server.get('/users', (req, resp)=>{
    return resp.json(users);
});

//Create - insere
server.post('/users', (req, resp)=>{
    const {name} = req.body;
    users.push(name);
    return resp.json(users);
});

//Put - edita
server.put('/users/:index', (req, resp)=>{
    const {index} = req.params;
    const {name} = req.body;
    users[index] = name;
    return resp.json(users);
});

//Delete - exclui
server.delete('/users/:index', (req, resp)=>{
    const {index} = req.params;
    users.splice(index, 1);
    return resp.json(users);
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server runing');
});