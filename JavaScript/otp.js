function generateOTP() { 
    let OTP=0;
    for (let i = 0; i < 4; i++ ) {
        OTP =OTP*10 + Math.floor(Math.random() * 10);
        //console.log(OTP);
    }
    return OTP;
}
console.log("OTP of 4 digits:"+generateOTP());