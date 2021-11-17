const models = require("../models");
function save(req, res) {
  console.log(req.body);
  const file = req.body.images;
  console.log(file);
  const post = {
    images: file,
    ...req.body,
  };
  console.log(post);
  // models.ImageUpload.create(post)
  //   .then((result) => {
  //     res.status(201).json({ msg: "Image uploaded", post: result });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ error: err });
  //   });
}
module.exports = { save };
