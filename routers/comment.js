const router = require("express").Router();
const commnetController = require("../controllers/comment.controller");
const authMiddleware = require("../middleware/auth");

// router.get("/", commnetController.allPosts);
router.post("/", authMiddleware.checkAuth, commnetController.save);
router.get("/", commnetController.getcmtreply);
module.exports = router;
