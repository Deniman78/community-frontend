const nodemailer = require('nodemailer')

class MailService {
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: '',
                pass: ''
            }
        })
    }
    async sendActivationEmail(to, link){
        await this.transporter.sendMail({
            from: '',
            to,
            subject: 'Account Activation',
            text: '',
            html: `
                <div>
                    <h1>Activation link</h1>
                    <a href="${link}">${link}</a>
                </div>
            ` 
        })
    }  
}

module.exports = new MailService