const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can choose a different port if needed

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter with your email service provider details
  const transporter = nodemailer.createTransport({
    service: 'Outlook', // e.g., 'Gmail'
    auth: {
      user: 'joelgetzke@outlook.com',
      pass: 'Bethebest77!',
    },
  });

  // Create an email with the form data
  const mailOptions = {
    from: `${email}`,
    to: 'joelgetzke@outlook.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email not sent:', error);
      res.status(500).send('Form submission failed.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
