const express = require("express"); //require the server
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express(); // app variable and call express function

mongoose.connect("mongodb://localhost/blog", {
  useNewParser: true, useUnifiedTopology: true,
})

app.set("view engine", "ejs"); //Set the view engine to ejs because it will convert to html

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ];
  res.render("articles/index", { articles: articles });
}); //Here we are getting the app and passing in the root, request, response, fat arrow function and send to the user “hello world”

app.listen(3001); //start up application on port 5000
