const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (user) => {
  const token = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
};

module.exports = createToken;
