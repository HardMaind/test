const postController = require("../controllers/post.controller");
const router = require("express").Router();
const authmidellware = require("../middleware/auth");

router.post("/", authmidellware.checkAuth, postController.save);
router.get("/:id", authmidellware.checkAuth, postController.show);
router.get("/", postController.allPosts);
router.patch("/:id", authmidellware.checkAuth, postController.update);
router.delete("/:id", authmidellware.checkAuth, postController.delete);
module.exports = router;
