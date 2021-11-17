const postRouter = require("./routers/post");
const registerRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const commnetRouter = require("./routers/comment");

const app = require("express")();
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//users
app.use("/register", registerRouter);
// post
app.use("/posts", postRouter);
//images
app.use("/upload", imageRouter);
//comment
app.use("/comment", commnetRouter);

module.exports = app;
