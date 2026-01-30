'use server';
import nodemailer from 'nodemailer';

export async function sendEmail(name: string, email: string, message: string) {
  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST,
      port: Number(process.env.NEXT_SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_SMTP_USER,
        pass: process.env.NEXT_SMTP_PASS,
      },
    });

    // Set up email data  with unicode symbols
    const mailOptions = {
      from: `"Website Contact" <${process.env.NEXT_SMTP_USER}>`,
      to: process.env.NEXT_CONTACT_EMAIL,
      replyTo: email, // ← user’s email here
      subject: 'Konsultacijos užklausa',
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
  `,
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
