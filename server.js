const express = require('express') //require the server
const articleRouter = require('./views/routes/articles')
const app = express() // app variable and call express function

app.set('view engine', 'ejs') //Set the view engine to ejs because it will convert to html 

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles =[{
        title: 'Test Article',
        createdAt: Date.now(),
        description: "Test description"
    }]
    res.render('index', {text: articles })
}) //Here we are getting the app and passing in the root, request, response, fat arrow function and send to the user “hello world”  

app.listen(3001) //start up application on port 5000