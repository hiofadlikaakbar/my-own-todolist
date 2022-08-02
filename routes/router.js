require("../db/db");
const router = require("express").Router();
const List = require("../models/list");
router.get("/", (req, res) => {
  res.render("index", {
    layout: "partials/layout.ejs",
    title: "Halaman utama",
  });
});

// todo page
router.get("/todo", async (req, res) => {
  const lists = await List.find();
  res.render("todo", {
    layout: "partials/layout.ejs",
    title: "Todo list",
    lists,
  });
});

// post
router.post("/todo", async (req, res) => {
  const list = new List({
    content: req.body.content,
  });
  try {
    await list.save();
    res.redirect("/todo");
  } catch (err) {
    res.redirect("/");
  }
});

// update
router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const lists = await List.find();
  res.render("edit", {
    layout: "partials/layout.ejs",
    title: "Edit Todo list",
    lists,
    id,
  });
});

router.post("/edit/:id", async (req, res) => {
  const id = req.params.id;
  await List.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
    console.error(err);
    res.redirect("/todo");
  }).clone();
});

// delete
router.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  List.findByIdAndRemove(id, (err) => {
    console.error(err);
    res.redirect("/todo");
  });
});

module.exports = router;
