const multer = require("multer");

const path = require("path");
const imagesPath = path.resolve(__dirname, "../public");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagesPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = { upload: upload };
