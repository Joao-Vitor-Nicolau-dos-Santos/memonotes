// const express = require('express');
// const helmet = require('helmet');
// const mysql = require('mysql2');
// const path = require('path'); // Para lidar com caminhos de arquivos

// const app = express();
// const port = 5000;

// // Configuração da conexão com o banco de dados
// var conexao = mysql.createConnection({
//     user: 'root',
//     password: '12345',
//     host: 'localhost',
//     port: 3306,
//     database: 'sistema_notas'
// });

// // Verifica se a conexão foi bem-sucedida
// conexao.connect((err) => {
//     if (err) {
//         console.log("Erro ao conectar no Mysql...");
//         return;
//     }
//     console.log("\nConexao Estabelecida com Sucesso!!!");
// });

// // Usar Helmet para proteger a aplicação
// app.use(helmet());

// // Configurar a CSP, permitindo fontes do Google
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"], // Permitir recursos somente do próprio domínio
//         styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Permitir fontes do Google Fonts
//         fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Permitir fontes do Google Fonts
//         scriptSrc: ["'self'"], // Permitir apenas scripts do próprio servidor
//         imgSrc: ["'self'"] // Permitir imagens apenas do próprio servidor
//     }
// }));

// // Servir arquivos estáticos da pasta 'public'
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint para listar todas as notas
// app.get('/api/notes', (req, res) => {
//     conexao.query('SELECT * FROM notas', (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao recuperar notas' });
//         }
//         res.json(results);
//     });
// });

// // Endpoint para criar uma nova nota
// app.post('/api/notes', (req, res) => {
//     const { titulo, conteudo } = req.body;
//     if (!titulo || !conteudo) {
//         return res.status(400).json({ error: 'Titulo e conteúdo são obrigatórios' });
//     }

//     const query = 'INSERT INTO notas (titulo, conteudo) VALUES (?, ?)';
//     conexao.query(query, [titulo, conteudo], (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao criar a nota' });
//         }
//         res.status(201).json({ id: results.insertId, titulo, conteudo });
//     });
// });

// // Endpoint para deletar uma nota
// app.delete('/api/notes/:id', (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM notas WHERE id = ?';

//     conexao.query(query, [id], (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao deletar a nota' });
//         }
//         if (results.affectedRows === 0) {
//             return res.status(404).json({ error: 'Nota não encontrada' });
//         }
//         res.status(204).send();
//     });
// });

// // Inicia o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });

// const express = require('express');
// const helmet = require('helmet');
// const mysql = require('mysql2');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Middleware para JSON
// app.use(express.json());

// // Configuração da conexão com o banco de dados
// const conexao = mysql.createConnection({
//     user: 'root',
//     password: '12345',
//     host: 'localhost',
//     port: 3306,
//     database: 'sistema_notas'
// });

// conexao.connect((err) => {
//     if (err) {
//         console.log("Erro ao conectar no MySQL:", err);
//         return;
//     }
//     console.log("Conexão estabelecida com sucesso!");
// });

// // Usar Helmet para proteger a aplicação
// app.use(helmet());

// // Configurar a CSP, permitindo fontes do Google
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         styleSrc: ["'self'", 'https://fonts.googleapis.com'],
//         fontSrc: ["'self'", 'https://fonts.gstatic.com'],
//         scriptSrc: ["'self'"],
//         imgSrc: ["'self'"]
//     }
// }));

// // Servir arquivos estáticos da pasta 'public'
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint para listar todas as notas
// app.get('/api/notes', (req, res) => {
//     conexao.query('SELECT * FROM notas', (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao recuperar notas' });
//         }
//         res.json(results);
//     });
// });

// // Endpoint para criar uma nova nota
// app.post('/api/notes', (req, res) => {
//     console.log("Recebendo requisição POST em /api/notes");
//     console.log("Corpo da requisição:", req.body);
    
//     const { titulo, conteudo } = req.body;
//     if (!titulo || !conteudo) {
//         console.log("Erro: Título ou conteúdo ausente.");
//         return res.status(400).json({ error: 'Titulo e conteúdo são obrigatórios' });
//     }

//     const query = 'INSERT INTO notas (titulo, conteudo) VALUES (?, ?)';
//     conexao.query(query, [titulo, conteudo], (err, results) => {
//         if (err) {
//             console.log("Erro ao executar a query:", err);
//             return res.status(500).json({ error: 'Erro ao criar a nota' });
//         }
//         console.log("Nota criada com sucesso, ID:", results.insertId);
//         res.status(201).json({ id: results.insertId, titulo, conteudo });
//     });
// });

// // Endpoint para deletar uma nota
// app.delete('/api/notes/:id', (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM notas WHERE id = ?';

//     conexao.query(query, [id], (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro ao deletar a nota' });
//         }
//         if (results.affectedRows === 0) {
//             return res.status(404).json({ error: 'Nota não encontrada' });
//         }
//         res.status(204).send();
//     });
// });

// // Inicia o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });


// DB c/ CORS
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors'); // Importa o CORS
const helmet = require('helmet');

const app = express();
const port = 5000;

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", "http://localhost:5000"]
        }
    }
}));

// Middleware para JSON
app.use(express.json());

// Middleware para CORS (pode configurar origens específicas se necessário)
app.use(cors({
    origin: 'http://localhost:5173' // Permite a origem do frontend
}));

// Configuração da conexão com o banco de dados
const conexao = mysql.createConnection({
    user: 'root',
    password: '12345',
    host: 'localhost',
    port: 3306,
    database: 'sistema_notas'
});

conexao.connect((err) => {
    if (err) {
        console.log("Erro ao conectar no MySQL:", err);
        return;
    }
    console.log("Conexão estabelecida com sucesso!");
});


// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para listar todas as notas
app.get('/api/notes', (req, res) => {
    conexao.query('SELECT * FROM notas', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao recuperar notas' });
        }
        res.json(results);
    });
});

// Endpoint para criar uma nova nota
app.post('/api/notes', (req, res) => {
    console.log("Recebendo requisição POST em /api/notes");
    console.log("Corpo da requisição:", req.body);
    
    const { titulo, conteudo } = req.body;
    if (!titulo || !conteudo) {
        console.log("Erro: Título ou conteúdo ausente.");
        return res.status(400).json({ error: 'Titulo e conteúdo são obrigatórios' });
    }

    const query = 'INSERT INTO notas (titulo, conteudo) VALUES (?, ?)';
    conexao.query(query, [titulo, conteudo], (err, results) => {
        if (err) {
            console.log("Erro ao executar a query:", err);
            return res.status(500).json({ error: 'Erro ao criar a nota' });
        }
        console.log("Nota criada com sucesso, ID:", results.insertId);
        res.status(201).json({ id: results.insertId, titulo, conteudo });
    });
});

// Endpoint para deletar uma nota
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM notas WHERE id = ?';

    conexao.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao deletar a nota' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Nota não encontrada' });
        }
        res.status(204).send();
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
