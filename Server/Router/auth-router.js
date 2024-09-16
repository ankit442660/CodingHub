const express = require("express");

const router = express.Router();
const { home,register,login, user ,verifyMail} =require("../Controllers/auth-controllers")
const validate=require("../middlewares/validate-middlewares");
const {signupSchema,loginSchema}=require("../Validators/auth-validators");
const authMiddleWare=require("../middlewares/authMiddleWare");

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema),login);
router.route("/verify").get(verifyMail);
router.route('/user').get(authMiddleWare ,user);

module.exports = router;
