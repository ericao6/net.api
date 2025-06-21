// server.js
const express = require('express');
const app = express();

let deltaTarget = 12345.67; // valor inicial

app.get('/api/delta', (req, res) => {
  res.json({ deltaTarget });
});

app.use(express.json());
app.post('/api/delta', (req, res) => {
  if (req.body.deltaTarget !== undefined) {
    deltaTarget = req.body.deltaTarget;
    return res.json({ success: true, deltaTarget });
  }
  res.status(400).json({ success: false, message: 'deltaTarget não fornecido' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
