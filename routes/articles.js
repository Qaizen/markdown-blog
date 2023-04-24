const express = require("express");
const Article = require("./../models/article");
const router = express.Router(); //Gives router to use to create like when you .get and render something but through the router eg. Router.get

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});
router.get("/:id", async (req, res) => {
    const article= await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
  res.render('articles/show', { article: article})
})

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.descirption,
    markdown: req.body.markdown,
  });
  try {
    // article = await article.save()
    // res.redirect(`/articles/${article.id}`)
    const savedArticle = await article.save();
    res.redirect(`/articles/${savedArticle.id}`);
  } catch (e) {
    console.log(e);
    res.render("articles/new", { article: article });
  }
});

module.exports = router; //We have to tell the application to use the router.
