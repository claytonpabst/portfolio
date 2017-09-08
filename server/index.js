const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js');
let nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = module.exports = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14) //this is 14 days
    }
}))


app.post('/api/sendEmail', sendEmail)

// function sendEmail(req, res) {
//   console.log(req.body)
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: false,
//     port: 25,
//     auth: {
//       user: config.gU,
//       pass: config.gP
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   })
//   let HelperOptions = {
//     from: '"Clayton Pabst" <claytonpabst3@gmail.com',
//     to: 'claytonpabst@gmail.com',
//     subject: `Portfolio Lead, ${req.body.userSubject}` ,
//     text: `From: ${req.body.userName} Contact: ${req.body.userEmail} Message: ${req.body.userMessage}`
//   }
//   transporter.sendMail(HelperOptions, (error, info) => {
//     if(error){
//       return console.log(error);
//     }
//     res.send({"message":"Email was sent successfully."})
//     console.log('The message was sent!');
//     console.log(info);
//   })

// }


function sendEmail(req, res) {
  console.log('hit')

  const msg = {
      from: 'Portfolio@sendgridmail.com',
      to: 'claytonpabst@gmail.com',
      subject: `Portfolio Lead, ${req.body.userSubject}` ,
      text: `From: ${req.body.userName} Contact: ${req.body.userEmail} Message: ${req.body.userMessage}`
    // to: 'claytonpabst@gmail.com',
    // from: 'Portfolio@sgmail.com',
    // subject: 'Sending with SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };


  sgMail.send(msg, (err, result) => {
    console.log(msg, err, result)

    if (err) {
      res.send('Error: Message not sent')
    } else {
      res.send('Message was sent successfully')
    }
  })
}



// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

app.use(express.static(__dirname + '/../build'))

var userController = require("./userController.js");

//////////Endpoints for the front end




app.listen(config.port, console.log("you are now connected on " + config.port));
