const express = require('express');
const app = express()
const port = 3000

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