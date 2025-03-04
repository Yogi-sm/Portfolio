import { createTransport } from "nodemailer";

var nameStr = document.getElementById('name');
var mail = document.getElementById('mail');
var msg = document.getElementById('msg');
var btn = document.getElementById('sendMail');

btn.addEventListener("click", submit);

async function submit() {
    // Disable the inputs when the button is clicked
    [mail, msg, nameStr].forEach(value => value.disabled = true);
    
    btn.innerText = "Sending...";

    // Validate email and message input
    const isValid = (!isValidEmail(mail.value) || msg.value === '' || nameStr.value === '');

    // Toggle error class for validation
    mail.classList.toggle("test", !isValidEmail(mail.value));
    msg.classList.toggle("test", msg.value === '');
    nameStr.classList.toggle("test", nameStr.value === '');

    if (isValid) {
        btn.innerText = "Send To Me";
    } else {
        await sendMail(mail, msg, btn);
    }
}

// Function to validate email (for example purposes, simple regex check)
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Function to simulate sending an email (you can replace this with actual email sending logic)
const nodemailer = require('nodemailer'); // Make sure to import nodemailer

async function sendMail(mail, name, msg) {
    try {
        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'devcreative692@gmail.com', // Your Gmail address
                pass: 'Dev123#@' // Your Gmail app-specific password (or actual password if 2FA is not enabled)
            }
        });

        // Define the content of the email
        const content = "This mail is from the portfolio. \n" +
            "The name is: " + name + "\n" +
            "The mail address is: " + mail + "\n" +
            "The message is: " + msg;

        // Set up the email options
        const mailOptions = {
            from: 'devcreative692@gmail.com',
            to: 'cloudcreate360@gmail.com', // The recipient's email address
            subject: 'Mail from portfolio',
            text: content
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent: ", info.messageId);

        // Enable the input fields after sending the email
        [mail, name, msg].forEach(value => value.disabled = false);

    } catch (error) {
        console.log("Error sending email: ", error);
    }
}

