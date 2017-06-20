const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator());

app.use(express.static('static'));
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', router);

app.listen(port, () => {
    console.log(`todo on ${port}`)
})