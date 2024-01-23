const postUser = require("../../../api/v1/authentication/controllers/postUser");
const router = require("express").Router();

router.post("/register", postUser);

module.exports = router;
