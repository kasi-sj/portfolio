"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (
  email: string,
  name: string,
  message: string
) => {
  try {
    const fromEmail = process.env.FROM_EMAIL;
    const fromPass = process.env.FROM_PASS;
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail'
      auth: {
        user: fromEmail,
        pass: fromPass,
      },
    });
    // Define email data
    const mailOptions = {
      from: "auth@verification.dev",
      to: fromEmail,
      subject: "portfolio message",
      html: `
          <div>
            <h1>${name} have messaged </h1>
            <p>${message}</p>
            <p>from ${email}</p>
          </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    if (info.accepted) {
      return { success: "Email sent successfully" };
    } else if (info.rejected) {
      return { error: "Email not sent" };
    } else {
      return { error: "Something went wrong" };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
