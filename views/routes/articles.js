const express = require('express')
const router = express.Router() //Gives router to use to create like when you .get and render something but through the router eg. Router.get 

router.get('/', (req, res) => {
    res.send('in articles')
})

module.exports = router //We have to tell the application to use the router. 