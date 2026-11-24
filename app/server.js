require('dotenv').config();

const express = require('express');
const AvisoFileRepository = require('./infrastructure/storage/aviso-file.repository');
const ApiService = require('./application/api.service');
const ApiController = require('./interfaces/controllers/api.controller');

const app = express();
const port = process.env.PORT || 4000;

const avisoRepository = new AvisoFileRepository('dados/aviso.txt');
const apiService = new ApiService(avisoRepository);
const apiController = new ApiController(apiService);

app.get('/', (req, res) => apiController.status(req, res));
app.get('/info', (req, res) => apiController.info(req, res));
app.get('/aviso', (req, res) => apiController.aviso(req, res));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
