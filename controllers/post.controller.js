const models = require("../models");

// save a post
function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  models.Post.create(post)
    .then((result) => {
      res.status(201).json({ msg: "post created", post: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
// Get data by id
function show(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(201).json({ post: result });
      } else {
        res.status(404).json({ msg: "post not found!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

// Get all posts
function showAll(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(201).json({ post: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
// update a post by id
function update(req, res) {
  const id = req.params.id;
  const updatePost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
  };
  const userId = 1;
  models.Post.update(updatePost, { where: { id: id, userId: userId } })
    .then((result) => {
      if (result) {
        res.status(201).json({ msg: "post updated", post: updatePost });
      } else {
        res.status(404).json({ msg: "post not found!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
// Delete data by id
function destroy(req, res) {
  const id = req.params.id;
  const userId = 1;
  models.Post.destroy({ where: { id: id, userId: userId } })
    .then((result) => {
      if (result) {
        res
          .status(201)
          .json({ msg: "post deleted succssfully ", post: result });
      } else {
        res.status(404).json({ msg: "post not found!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

module.exports = {
  save: save,
  show: show,
  allPosts: showAll,
  update: update,
  delete: destroy,
};
