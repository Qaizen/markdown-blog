const express = require('express')
const router = express.Router() //Gives router to use to create like when you .get and render something but through the router eg. Router.get 

router.get('/new', (req, res) => {
    res.render('articles/new')
})


router.post('/', (req, res) => {


})


module.exports = router //We have to tell the application to use the router. 