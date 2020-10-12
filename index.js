const express = require('express');
const server = express();
server.use(express.json());
const users = ['Danilo', 'Pedro', 'Brendo'];

function badRequest(getResp, getStatus = 400, msg){
    return getResp.status(getStatus).json({
        Erro: `${msg}`
    });
}

function nameIsNotValid(req, resp, next){
    if(!req.body.name){
        badRequest(resp, 400, 'Nome não preenchido');
    }
     return next();
}

function userIsNotListed(req, resp, next){
    const user = users[req.params.id];
    if(!user){
        badRequest(resp, 400, 'Usuário não listado');
    }
    req.user = user;
    return next();
}

//Read - lista
server.get('/users/:id', userIsNotListed, (req, resp)=>{
    resp.json({msg: `Usuário: ${req.user}`});
});

server.get('/users', (req, resp)=>{
    return resp.json(users);
});

//Create - insere
server.post('/users', nameIsNotValid,(req, resp)=>{
    const {name} = req.body;
    users.push(name);
    return resp.json(users);
});

//Put - edita
server.put('/users/:index', nameIsNotValid, userIsNotListed, (req, resp)=>{
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