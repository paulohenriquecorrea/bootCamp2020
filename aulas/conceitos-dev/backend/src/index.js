const { json } = require('express');
const express = require('express');
// import { express } from 'express';

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  // const query = request.query;
  const { name, owner } = request.query;

  return response.json(['Projeto 1', 'Projeto 2']);
});

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(['Projeto 1', 'Projeto 2', 'Projeto 3']);
});

app.put('/projects/:id', (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(['Projeto 4', 'Projeto 2', 'Projeto 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 2']);
});
app.listen(3333, () => {
  console.log('🚀 Back-end started! 🚀');
});
