const User = require("../../../../models/authentication/userSchema");
const bcrypt = require("bcrypt");

const postUser = async (req, res) => {
  const { email, password, name, phone, role } = new User(req.body);
  const oldUser = await User.findOne({ email });
  if (oldUser) return res.status(401).json({ error: "User already exists!" });

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, password: encryptedPassword, name, phone, role };

  const result = await User.create(newUser);
  res.status(201).send(result);
};

module.exports = postUser;
