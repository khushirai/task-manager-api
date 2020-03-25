const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'khushirai9596@gmail',
        subject:'Thanks for joining in',
        text:`welcome to the app, ${name}.
        Let me know how you get along the app`
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'khushirai9596@gmail',
        subject:'Sorry to see you go',
        text:`Goodbye,${name}.
        I hope to see you back some time`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}

