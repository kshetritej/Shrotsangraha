import nodemailer from "nodemailer";
import EnvEnvironment from "../configs/env.config";


class EmailUtil {
    constructor(){
        nodemailer.createTransport({
            service:"Gmail",
            host:"gmail",
            auth:{
                user.EnvEnvironment.EMAIL_USERNAME
                pass: EnvEnvironment.EMAIL_PASSSWORD,
            }
        })
    }
}