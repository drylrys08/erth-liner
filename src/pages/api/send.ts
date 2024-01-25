import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // const { email } = await req.json();
      console.log(req.body);
      // console.log(request);
      // console.log(email);
      // // const {email, name , message, subject}] =
      const transporter = await nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "darylreyes.dev@gmail.com",
          pass: "ymdvkdqvnpciswwt",
        },
        secure: true,
      });

      const mailOptions = {
        from: "darylreyes.dev@gmail.com",
        to: "drylrys08@gmail.com",
        subject: "Test",
        html: "<h3>Hello this test</h3>",
      };

      const test = await transporter.sendMail(mailOptions);

      console.log(test);
      res.status(200).json({ message: "Email Successfully Sent" });
    } catch (error) {
      console.log("error", error);
    }
  }
}
