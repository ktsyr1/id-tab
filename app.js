const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const cookieParser= require("cookie-parser")
const session = require("express-session")
const flash =require("connect-flash")
const passport =require('passport')
// const ev = 

app.set('view engine', 'pug')
require('./config/db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())  
app.use(session({
    secret:"center_@?!",
    saveUninitialized:false,
    resave:false
}))
app.use(flash())
app.use(function (req, res, next) {
        res.locals.messages = require('express-messages')(req, res)
        next()
    })
require('./auth/passport')

app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
    res.locals.errors = req.flash("error");
    res.locals.successes = req.flash("success");
    next();
});
app.get('*', (req,res,next) =>{
    res.locals.user = req.user || null
    next()
})
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(express.static('update'));
app.use('/', require('./route/route'))
app.use('/', require('./route/center'))
app.use('/users', require('./route/user'))
app.use('/', require('./auth/user'))
app.use((req,res) => {
    res.status(404).send('page not found')
})
const port = process.env.PORT || 5050
app.listen(port, () => console.log(`ren : ${port}`))