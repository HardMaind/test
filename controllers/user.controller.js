require("dotenv").config();
const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register users
function sing_up(req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({ msg: "Emails is already exsist" });
      } else {
        bcrypt.hash(req.body.password, 8, (err, hash) => {
          const register = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
          };

          models.User.create(register)
            .then((result) => {
              res.status(201).json({ msg: "User Register", post: result });
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
// login User

function login(req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(401).json({ msg: "invalied credentails" });
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            const Token = jwt.sign(
              { email: user.email, userId: user.id },
              process.env.JWT_KEY,
              {
                expiresIn: 1200,
              },
              function (err, token) {
                res.status(200).json({
                  msg: "Authentication Successfully",
                  token: token,
                  expiresIn: "2 hours",
                });
              }
            );
          } else {
            res.status(401).json({ msg: "invalied credentails" });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

module.exports = {
  sing_up: sing_up,
  login: login,
};
