const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const categorias = require('./categorias.json')
const categoriasComVideos = require('./categoriasComVideos.json')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.get('/categorias', (req, res) => {
  if (req.query._embed === 'videos') {
    return res.send(categoriasComVideos)
  }
  res.send(categorias)
})

app.get('*', function (req, res) {
  res.status(404).send('Not found');
});

app.listen(port, () => console.log(`Example app listening at ${port}`))
