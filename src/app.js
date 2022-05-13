const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(cookieParser())

//Routes Import
const psychiatrist = require("./routes/hospitalRoute")
const psychiatrist = require("./routes/psychiatristRoute")
const patient = require("./routes/patientRoute")

app.use("/r1",Hospital)
app.use("/r1",psychiatrist)
app.use("/r1",patient)


//mddileware for Errors
app.use(errorMiddleware)


module.exports = app;
