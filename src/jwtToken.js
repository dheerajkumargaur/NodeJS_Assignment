const sendToken = (Hospital,psychiatrist, statusCode, res) => { 

    const token_H = Hospital.getJWTToken();
    const token = psychiatrist.getJWTToken();
    
    const options = {
        exprires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        psychiatrist,
        token
    })

}

module.exports = sendToken