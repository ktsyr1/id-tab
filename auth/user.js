const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('./user.models')
const passport = require('passport')

isAuth= (req,res,next) =>{
    if (req.isAuthenticated()) {
        return next()
    }
    req.flash('errorlogin', "Please, login first.")
    res.redirect('/users/login')
}

router.get('/', (req,res,next) =>{
    res.render('index', {title: 'dashboard page'})
    next()
})

router.get('/login', (req,res,next) =>{
    if (req.user) res.redirect('/')
    else res.render('login', { title: "login page" })
    next()
})

router.get('/users/signup', (req,res,next) =>{
    if (req.user) res.redirect('/')
    else res.render('/users/signup', { title: "register page" })
    next()
})

/* process login */
router.post('/users/login', (req,res,next) =>{
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req,res,next)
}) 

/* process register */
router.post('/users/signup', (req,res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.pass 

    req.checkBody('username', 'username is required').notEmpty()
    req.checkBody('email', 'email is not valid').isEmail()
    req.checkBody('pass', 'password is required.').notEmpty().isLength({min: 5}).withMessage('password must be great than 5 chars.')
    req.checkBody('repass', 'password not much').equals(req.body.pass)

    const errors = req.validationErrors()

    if(errors) {
        req.flash('error', errors)
        res.render('register', {title: 'register page', errors: errors})
    } else {
        const newUser = new User({
            username,
            email,
            password
        })

        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash)=>{
                if (err) { console.log(err) }
                newUser.password = hash
                newUser.save((err) => {
                    if (err) {
                        console.log(err)
                        return;
                    } else {
                        req.flash('sucess', 'user saved to database')
                        res.redirect('/users/login')
                    }
                })
            })
            
        })
    }

})

router.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/users/login')
   });
module.exports = router