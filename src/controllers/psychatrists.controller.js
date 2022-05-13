const Psychiartist = require("../models/psychiatrists.model")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require("../jwtToken")

exports.Psychiatristregister = catchAsyncErrors(async(req,res)=>{
    const psychiartist = await Psychiartist.create(req.body)
    return sendToken(psychiartist,201,res)
})

exports.Psychiatristlogin = catchAsyncErrors(async (req, res, next) => {
    const { firstName} = req.body;
  
    const psychiatrist = await Psychiartist.findOne({ firstName })
  
    if (!psychiatrist) {
      return next(new ErrorHander("there is no psychiatrist register with this name", 401));
    }

    sendToken(psychiatrist, 200, res);
  });