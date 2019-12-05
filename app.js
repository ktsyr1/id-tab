const express = require('express');
const app = express();
const db = require('./config/db')
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(express.static('update'));
const routeN = require('./route/route');
app.use('/ar', routeN);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`ren : ${port}`))