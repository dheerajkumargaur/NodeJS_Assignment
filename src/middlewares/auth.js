const catchAsyncErrors = require("./catchAsyncErrors")
const jwt = require("jsonwebtoken")
const Psychiartist = require("../models/psychiatrists.model")
const Psychiartist = require("../models/hospital.model")


exports.isAuthenticatedHospital = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login/register access to this result"))
    }
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    req.Hospital= await Hospital.findById(decodedToken.id)
    next()
})

exports.isAuthenticatedPsychatrist = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login/register access to this result"))
    }
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    req.psychiatrist= await Psychiartist.findById(decodedToken.id)
    next()
})




