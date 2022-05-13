const Hospital = require("../models/hospital.model")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require("../jwtToken")

exports.hospitalregister= catchAsyncErrors(async(req,res)=>{
    const Hospital = await Hospital.create(req.body)
    return sendToken(Hospital,201,res)
})

exports.Hospital = catchAsyncErrors(async (req, res, next) => {
    const { hospitalName} = req.body;
  
    const Hospital = await Hospital.findOne({ hospitalName })
  
    if (!Hospital) {
      return next(new ErrorHander("There is no Hospital register with this name", 401));
    }

    sendToken(Hospital, 200, res);
  });