const express = require('express');
const path = require('body-parser');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Servir arquivos HTML, CSS E JS da pasta public
app.use(express.static('public'));

// Rota para cadastrar pessoas 
app.post('/cadastrar', (req, res) => {
    const {nome} = req.body;
    db.run("INSERT INTO pessoas (nome) VALUES (?)", [nome], (err) => {
        if(err) return res.status(500).send("Erro ao cadastrar");
        res.send("Pessoa cadastrada com sucesso!");
    });
});

// Rota para listar pessoas
app.get('/listar', (req, res) => {
    db.all("SELECT * FROM pessoas", [], (err, rows) => {
        if (err) {
            return res.status(500).send("Erro ao buscar");
        }
        res.json(rows);
    });
});

// Rodar o servidor
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:$(port)');
});