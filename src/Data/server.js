const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'sistema_notas',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

app.get('/notas', (req, res) => {
    db.query('SELECT * FROM notas', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/notas', (req, res) => {
    const { title, description } = req.body;
    db.query('INSERT INTO notas (titulo, conteudo) VALUES (?, ?)', [title, description], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, title, description });
    });
});

app.delete('/notas/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM notas WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
