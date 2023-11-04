const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"anandmahato64@gmail.com",
        pass:"uslpwuxlwqrnnlmb"
    }
})

let draftMail = async (candidateName,email,position,companyName,offerAmount,startDate)=>
{
    let mailOptions={
        from:"anandmahato64@gmail.com",
        to:email,
        subject:"offer letter",
        html: `<h3>Dear ${candidateName}</h3>,

        We are pleased to extend an offer of employment for the position of ${position} at ${companyName}. After careful consideration of your qualifications and experience, we are confident that your skills and expertise will make a significant contribution to our team.
        
        This offer is contingent upon the successful completion of a background check and any other pre-employment screenings that may be required for this position. Your anticipated start date will be ${startDate}.
        
        
        
        Terms of Employment:
        
        Position: ${position}
        
        Salary: $${offerAmount}
        
        Benefits: As per company policy, including health insurance, retirement plans, and other applicable benefits.
        
        Work Schedule: 45 hours per week, 5 per week
        
        Responsibilities:
        
        [List key responsibilities and duties relevant to the position]
        
        
        
        Performance Review:
        
        Your performance will be reviewed on a regular basis, and you will be eligible for performance-based salary increases and bonuses based on the company's policies.
        
        Benefits:
        
        In addition to your salary, you will be eligible for our company benefits package, including health insurance, retirement plans, and other applicable benefits. Detailed information about our benefits will be provided separately.
        
        Termination:
        
        Employment with ${companyName} is at-will, which means that either you or the company can terminate the employment relationship at any time, with or without cause and with or without notice.
        
        
        
        Confidentiality Agreement:
        
        As an employee of ${companyName}, you will be required to sign and adhere to our confidentiality agreement, which prohibits the disclosure of sensitive company information.
        
        Please indicate your acceptance of this offer by signing and returning a copy of this letter by [Offer Acceptance Deadline], either by email or regular mail. If you have any questions, feel free to contact me at [Your Phone Number] or [Your Email Address].
        
        We are excited about the opportunity to welcome you to our team and look forward to your positive response.
        
        
        
        Best regards,
        
        
        
        Ms. Sonal Godshelwar, 
        
        HR, Suvidha Foundation (Suvidha Mahila Mandal)
        
        www.suvidhafoundationedutech.org
        
        https://www.linkedin.com/company/suvidha-foundation/
        
        `
    }
    transporter.sendMail(mailOptions, ()=>{console.log(`mail sent successfully to email ${email}`)})
}


module.exports = {
    draftMail
}

