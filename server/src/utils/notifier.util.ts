import nodemailer, { Transporter} from "nodemailer";
import EnvEnvironment from "../configs/env.config";
import SMTPTransport from "nodemailer/lib/smtp-transport";


class EmailUtil {
  transporter: Transporter<SMTPTransport.SentMessageInfo>;
  constructor(){
    this.transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: EnvEnvironment.EMAIL_USERNAME,
        pass: EnvEnvironment.EMAIL_PASSSWORD,
      },
      headers:{
        "mime-type":"text/html",
      }
    })
  }


  async sendEmail(usermail:string, EnvEnvironment.EMAIL_USERNAME:string){
    await this.transporter.sendMail({
      from:EnvEnvironment.EMAIL_USERNAME,
      to: usermail,
      subject: "Noticed a recent login",
      html:`We have noticed a recent login on your account </b>
            at ${Date.now()}`
    });
  }
}
