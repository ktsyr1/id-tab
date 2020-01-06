const express = require('express');
const app = express();
const db = require('./config/db')
var bodyParser = require('body-parser')

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(express.static('update'));
// app.use(express.static('views'));
const routeN = require('./route/route');
app.use('/', routeN);

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`ren : ${port}`))