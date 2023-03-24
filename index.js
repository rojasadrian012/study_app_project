const { application } = require('express');
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser());

const userRoute = require("./src/route/users/users.route");

//Ruta raiz
app.get('/', function (req, res) {
    //logica
  res.send('Hello World');
});
app.get('/pagina2', function (req, res) {
    //logica
    //esta aqui -Controller
    res.json({application: 'Study APP', version: '1.0.0'});
  });
//llamadas a los routes de los UCs
userRoute(app);

app.listen(3000);