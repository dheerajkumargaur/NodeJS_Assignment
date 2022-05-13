const express = require("express")
const router = express.Router()
const {Psychiatristregiste,Psychiatristlogin}  = require("../controllers/psychatrists.controller")

router.route("/register").post(Psychiatristregister)
router.route("/login").post(Psychiatristlogin)


module.exports = router;
