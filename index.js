// run `node index.js` in the terminal
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/user', (req, res) => {
  const user = [
   { 
      id: 1, 
      name: 'Fernando'
    },
    {
      id: 2,
      name: 'Marta'
    }
  ]
  res.status(404).json(user)
})

app.post('/user', (req, res) => {
  const user = req.body;//recibimos de frontend un body
  user.id = 4565; // y la db genera un id
  const result = {
    message: 'Usuario creado',
    user
  }
  res.status(201).json(result)
})

app.put('/user/:id', (req, res) => {
  const user = req.body;
  const { id } = req.params;// no entiendo
  user.id = id;
  const result = {
    message: 'Usuario update',
    user
  }
  res.status(200).json(result)
})

app.patch('/user', (req, res) => {
  const user = req.body;
  const { id } = req.params;// no entiendo
  user.id = id;
  const result = {
    message: 'Usuario update with path',
    user
  }
  res.status(200).json(result)
})

app.delete('/user/:id', (req, res) => {//elimina el id de manera dinamica, solo ingresando a esa pagina
  const { id } = req.params;
  //const id = req.params.id //segunda opcion
  const result = {
    message: 'Usuario ${id} deleted'
  }
  res.status(200).json(result)
})

app.listen(port, () => {
  console.log(`##### App started. Port: ${port} #####`)
})