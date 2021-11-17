const models = require("../models");

// save a post
function save(req, res) {
  const comment = {
    content: req.body.content,
    postId: 1,
    userId: req.body.userId,
    parentId: req.body.parentId,
  };
  const parentIdLength = 3;
  var count = 0;
  models.Commnet.findAll({
    where: { parentId: req.body.parentId },
  }).then(function (result) {
    res.json(result);
    for (i = 0; i < result.length; i++) {
      count++;
      if (count == parentIdLength) {
        console.log("Not able to reply");
        break;
      } else {
        console.log("Able to reply");
        break;
      }
    }
  });
}

// Get all posts
function showAll(req, res) {
  models.Commnet.findAll()
    .then((result) => {
      res.status(201).json({ comment: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

//get a comment one and reply
function getcmtreply(req, res) {}

module.exports = {
  save: save,
  allPosts: showAll,
  getcmtreply: getcmtreply,
};

////
// models.Commnet.findAll({ where: { parentId: 1 } }).then(function (results) {
//   for (i = 0; i < results.length; i++) {
//     console.log(results.length);
//     if (i == 4) {
//       console.log("abc");
//       break;
//     } else {
//       console.log(JSON.stringify(results[i]));
//     }
//   }
//   res.json({ "Ids is:": results[i] });
//   // res.json(results);
// });
// models.Commnet.findAll({
//   attributes: [sequelize.literal("COUNT(DISTINCT(parentId))"), "parentId"],
//   group: "parentId",
// }).then(function (resl) {
//   res.json(resl);
// });
// models.Commnet.findOne({ where: { id: req.params.id, parentId: 1 } })
//   .then((result) => {
//     res.status(200).json({ Data: result });
//   })
//   .catch((err) => {
//     res.status(500).json({ error: err });
//   });
