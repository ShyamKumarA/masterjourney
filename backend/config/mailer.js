// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.in",
//   port: 587,
//   secure: false, // true for TLS, false for SSL
//   auth: {
//     user: "info@marketjourney.in",
//     pass: "123@marketjourney",
//   },
// });

// // create the message object

// const sendMail = (mailId, name, sponserid, password) => {
//   const recipient = mailId;

//   const message = {
//     from: `MARKET JOURNEY GROUP <info@marketjourney.in>`,
//     to: `${recipient}`,
//     subject: `Hi ${name}, Registration successful.`,
//     text: `Hi ${name}, Welcome to MARKET JOURNEY GROUP`,
//     html: `<h4>Congrats! You have joined the MARKET JOURNEY GROUP .</h4><p>Your sponserID is <strong>${sponserid}</strong><br/>Username: ${name}<br />Password: ${password}</p>`,
//   };

//   // send the email
//   transporter.sendMail(message, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return;
//     }

//     console.log(`Message sent: ${info.messageId}`);
//   });
// };

// export default sendMail;
