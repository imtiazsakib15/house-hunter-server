const User = require("../../../../models/authentication/userSchema");

const postUser = async (req, res) => {
  try {
    const { accessToken } = new User(req.body);
    if (!accessToken) return res.status(401).send({ message: "Unauthorized" });

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ message: "Unauthorized" });
      // console.log(decoded);
      return res.status(200).json({ user: decoded });
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error!" });
  }
};

module.exports = postUser;
