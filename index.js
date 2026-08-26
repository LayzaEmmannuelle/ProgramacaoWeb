const express = require('express');

const app = express();

app.use(express.json());

let alunos =[];
let cursos =[];

app.post('/alunos', (req, res) => {
    const {nome, email} = req.body;
    alunos.push({nome, email, id: alunos.length});
    res.status(201).send({message: 'Aluno cadastrado!'});
});

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id);
    res.status(200).json(aluno);
});

app.put('/alunos/:id', (req, res) => {
    const{nome, email} = req.body;
    const aluno = alunos.find(aluno => aluno.id == req.params.id);
    aluno.nome = nome;
    aluno.email = email;
    res.status(200).json(aluno);
});

app.patch('/alunos/:id', (req, res) => {
    const{nome, email} = req.body;
    const aluno = alunos.find(aluno => aluno.id == req.params.id);
    if(nome){
        aluno.nome = nome;
    }
    if(email){
        aluno.email = email;
    }               
    res.status(200).json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id;
    alunos = alunos.filter(aluno => aluno.id != id);
    res.status(200).send({message: 'Aluno deletado!'});
});

app.post('/cursos', (req, res) => {
    const {nome, descricao} = req.body;
    cursos.push({nome, descricao, id: cursos.length});
    res.status(201).send({message: 'Curso cadastrado!'});
});   

app.get("/cursos", (req, res) => {
    res.status(200).json(cursos);
});

app.get("/cursos/:id", (req, res) => {
    const curso = cursos.find(curso => curso.id == req.params.id);
    res.status(200).json(curso);
});

app.put("/cursos/:id", (req, res) => {
    const {nome, descricao} = req.body;
    const curso = cursos.find(curso => curso.id == req.params.id);
    curso.nome = nome;
    curso.descricao = descricao;
    res.status(200).json(curso);
});

app.patch("/cursos/:id", (req, res) => {
    const {nome, descricao} = req.body;
    const curso = cursos.find(curso => curso.id == req.params.id);
    if(nome){
        curso.nome = nome;
    }
    if(descricao){
        curso.descricao = descricao;
    }
    res.status(200).json(curso);
});

app.delete("/cursos/:id", (req, res) => {
    const id = req.params.id;
    cursos = cursos.filter(curso => curso.id != id);
    res.status(200).send({message: 'Curso deletado!'});
});

app.listen(3000);


