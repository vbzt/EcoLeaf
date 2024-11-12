const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  secure: false,
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'ecoleaf2024@gmail.com',
    pass: 'fqxyovncdtlrtkey'
  },
  tls: {
    rejectUnauthorized: false
  }
})

const sendMail = async (to, subject, message) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ to, subject, html: message }, (error) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Email enviado')
        resolve()
      }
    })
  })
}

module.exports = { sendMail }
