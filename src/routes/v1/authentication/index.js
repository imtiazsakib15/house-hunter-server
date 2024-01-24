const postRegisterUser = require("../../../api/v1/authentication/controllers/postRegisterUser");
const postLoginUser = require("../../../api/v1/authentication/controllers/postLoginUser");
const postUserDetails = require("../../../api/v1/authentication/controllers/postUserDetails");
const router = require("express").Router();

// Post user info to database api
router.post("/register", postRegisterUser);

router.post("/login", postLoginUser);

router.post("/login", postUserDetails);

module.exports = router;
