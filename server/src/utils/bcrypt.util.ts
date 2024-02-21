import bcrypt, { genSalt } from "bcrypt";
import { User } from "src/entities/user.entity";

class bcryptUtil {
    async hashPassword(password: string): Promise<string> {
        try {
            const salt = await genSalt(11);
            const hash = await bcrypt.hash(password, salt);
            return hash;

        } catch (err) {
            console.log("error hashing pass", err)
            throw err;
        }
    }

    async comparePassword(username:string,password: string) {
        const user = await User.findOne({where:{username:username}})
        const hash = user?.password
        //@ts-ignore
        const isValid = bcrypt.compare(password, hash)
        if(!isValid) {
            console.log("wrong password");
            return
        }
        console.log("login successfull")
    }
}

export default new bcryptUtil;

