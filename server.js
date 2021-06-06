
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path")


//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials(path.join( __dirname + '/views/partials'));

// Servir contenido estatico 
app.use( express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
        nombre: 'Pedro Bonnin',
        titulo: 'TP'
  })
});

app.get('/blogs', function (req, res) {
  res.render('blogs')
});

app.get('/blog', function (req, res) {
  res.render('blog')
});

app.get('/perfil', function (req, res) {
  res.render('perfil')
});




app.get('*', function (req, res) {
  res.send("404 | pagina no encontrada")
  });
  
app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});