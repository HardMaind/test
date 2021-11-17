require("dotenv").config();
const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const Token = req.headers.authorization;
    const decodedtoken = jwt.verify(Token, process.env.JWT_KEY);
    req.userData = decodedtoken;
    next();
  } catch (error) {
    return res.status(401).json({ error: error });
  }
}

module.exports = { checkAuth: checkAuth };
