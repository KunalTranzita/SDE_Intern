var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kunalsrivastav900@gmail.com',
    pass: 'Kunal@123'
  }
});

var mailOptions = {
  from: 'kunalsrivastav900@gmail.com',
  to: 'kunalsrivastav500@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});