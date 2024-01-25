const createToken = require("../../../../lib/authentication/createToken");
const User = require("../../../../models/authentication/userSchema");
const bcrypt = require("bcrypt");

const postLoginUser = async (req, res) => {
  try {
    const { email, password } = new User(req.body);
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "No User Found!" });

    if (await bcrypt.compare(password, user.password)) {
      const accessToken = await createToken(user.email);
      console.log(accessToken);
      return res.json({ accessToken });
    }

    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error!" });
  }
};

module.exports = postLoginUser;
