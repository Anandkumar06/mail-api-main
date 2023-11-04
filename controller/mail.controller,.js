const {draftMail} = require('../service/mailService')

let querymail = async(req, res,next)=>
{
    try{
        
        let {candidateName,email,position,companyName,offerAmount,startDate} = req.body
        if(!email){
            res.status(404).json("email not sent")
        }
        console.log("mail")
        draftMail(candidateName,email,position,companyName,offerAmount,startDate)
        res.status(200).json({error:false,message:"mail sent"})
    }
    catch(err){
        next(err)
    }

}

module.exports = {
    querymail
}