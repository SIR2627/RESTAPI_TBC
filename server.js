const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express()
const port = 3000

async function connect() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Conectado ao MongoDB');
}

connect().catch(err => console.log(err));


app.get('/alunos', (req, res) => {
  res.send('Olá Alunos!')
})

app.get('/alunos/:id', (req, res) => {
  id = req.params.id;
  res.send('Olá Aluno ' + id)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})