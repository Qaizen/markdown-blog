const express = require("express");
const Article = require("./../models/article");
const router = express.Router(); //Gives router to use to create like when you .get and render something but through the router eg. Router.get

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});
router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.descirption,
    markdown: req.body.markdown,
  });
  try {
    const savedArticle = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (e) {
    console.log(e);
    res.render("articles/new", { article: article });
  }
});


router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router; //We have to tell the application to use the router.
