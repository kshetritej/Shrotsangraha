import bcrypt from "bcrypt";
import { User } from "../entities/user.entity";

class bcryptUtil {
    async hashPassword(password: string): Promise<string> {
        try {
            const hash = await bcrypt.hash(password, 11);
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
        return user;
    }
}

export default new bcryptUtil;

