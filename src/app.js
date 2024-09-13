const express = require('express');
// const connectDB = require('./config/db');

const autor_routes = require('./routes/autor_route.js');
const livro_routes = require('./routes/livro_route.js');

const app = express();

//retirei a conexão da 
// Conectar ao banco de dados
// connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/autor', autor_routes);
app.use('/livro', livro_routes);

// Porta
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});