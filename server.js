const express = require("express") //require the server
const mongoose = require("mongoose")
const Article = require('./models/article')
const articleRouter = require("./routes/articles")
const methodOverride = require('method-override')
// const { method } = require("method");
const app = express(); // app variable and call express function

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true //,userCreateIndex: true
})

app.set("view engine", "ejs"); //Set the view engine to ejs because it will convert to html
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
  createdAt: 'desc'})
  res.render("articles/index", { articles: articles });
}); //Here we are getting the app and passing in the root, request, response, fat arrow function and send to the user “hello world”

app.use("/articles", articleRouter);

app.listen(3001); //start up application on port 5000
