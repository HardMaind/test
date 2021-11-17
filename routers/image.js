const router = require("express").Router();
const imageUploadController = require("../controllers/imageuplod.controller");
const imageUploder = require("../helper/imageupload");
router.post(
  "/",
  imageUploder.upload.single("images"),
  imageUploadController.save
);

module.exports = router;
