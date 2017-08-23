const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config();
const nodemailer = require('nodemailer');

admin.initializeApp(config.firebase);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);


exports.sendEmailConfirmation = functions.database.ref('/messages/{uId}').onWrite(event => {
  const message = event.data.val();  
  
  const mailOptions = {
    from: '<noreply@firebase.com>',
    to: 'annsxie.web@gmail.com',
    subject: 'new message received',
    text: JSON.stringify(message)
  };   
   
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('Message confirmation email sent');
   
});
});