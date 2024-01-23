const postUser = require("../../../api/v1/authentication/controllers/postUser");
const router = require("express").Router();

// Post user info to database api
router.post("/register", postUser);

module.exports = router;
