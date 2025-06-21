const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let dadosDoSite = {};

// Rota para receber dados do site
app.post('/enviar-dados', (req, res) => {
  dadosDoSite = req.body;
  console.log('Dados recebidos do site:', dadosDoSite);
  res.json({ status: 'Dados recebidos com sucesso!' });
});

// Rota para o robô buscar dados
app.get('/buscar-dados', (req, res) => {
  res.json(dadosDoSite);
});

app.get('/', (req, res) => {
  res.send('API Node.js está rodando com sucesso.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
