//criar uma rota e terr um retorno Json
const express = require('express');

const routes = require('./routes'); //importação dos routes de route.js

const app = express();
app.use(express.json()); //para o usar os arquivos Json
app.use(routes);

module.exports = app;


