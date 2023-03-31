const { application } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

const userRoute = require("./src/route/users/users.route");
const topicRoute = require("./src/route/topics/topics.route");
const themeRoute = require("./src/route/themes/themes.route")

// Ruta raíz
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/pagina2', function (req, res) {
  res.json({ application: 'Study APP', version: '1.0.0' });
});

// Llamadas a los routes de los UCs
userRoute(app);
topicRoute(app);
themeRoute(app)

app.listen(3000);
