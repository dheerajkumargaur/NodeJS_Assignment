const express = require("express")
const router = express.Router()
const {registerPsychiatrist,loginPsychiatrist}  = require("../controllers/hospital.controller")

router.route("/register").post(registerHospital)
router.route("/login").post(Hospital)


module.exports = router;
