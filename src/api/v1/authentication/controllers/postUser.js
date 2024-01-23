const User = require("../../../../models/authentication/userSchema");
// const bcrypt = require("bcrypt");

const postUser = async (req, res) => {
  const newUser = new User(req.body);

  //   const encryptedPassword = await bcrypt.hash(password, 10);

  //   const newUser = { email, password: encryptedPassword, name, phone, role };

  const result = await newUser.save();
  res.status(201).send(result);
};

module.exports = postUser;
