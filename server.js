require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const cors = require("cors");
const messageRouter = require("./router/messages");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// pusher
const pusher = new Pusher({
  appId: "1199680",
  key: "3782ff4701b848ad845a",
  secret: "2e94cb1433ea89913706",
  cluster: "ap2",
  useTLS: true,
});
// coonecte with mongodb
mongoose
  .connect(process.env.URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("coonecte with database"))
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;
db.once("open", () => {
  const msgcollection = db.collection("whatsapps");
  const changeStream = msgcollection.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      var date = Date.now();
      var currentDate = new Date(date).getTimezoneOffset();
      // currentDate.getTimezoneOffset();
      console.log(currentDate);
      const msgDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: msgDetails.name,
        message: msgDetails.message,
        timestamp: currentDate,
        receiver: msgDetails.receiver,
      });
      console.log(currentDate);
    } else {
      console.log("Error trigger in pusher");
    }
  });
});

app.use(messageRouter);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
