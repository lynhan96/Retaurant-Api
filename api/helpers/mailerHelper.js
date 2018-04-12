const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_URL,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD
  }
})

const forgotPasswordOption = (profile, newPassword) => {
  return {
    from: 'BK Food Service <' + process.env.ADMINISTRATOR_EMAIL + '>',
    to: profile.email,
    subject: 'Mật khẩu mới dùng để đăng nhập vào hệ thống quản lí nhà hàng',
    html: 'Mật khẩu: ' + newPassword
  }
}

exports.sendForgotPasswordEmail = (profile, newPassword) => transporter.sendMail(forgotPasswordOption(profile, newPassword))
