const router = require("express").Router();
const Messages = require("../models/messages");
const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));
// post messgae
router.post("/api/messages/new", (req, res) => {
  const dbmessage = req.body;
  Messages.create(dbmessage)
    .then((data) => {
      res.status(201).send(`new message created,${data}`);
    })
    .catch((err) => res.status(500).send(err));
});
// get all message
router.get("/api/messages", (req, res) => {
  Messages.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
