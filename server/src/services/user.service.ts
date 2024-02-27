import { registerUser } from "../@types/registerUser.type";
import { User } from "../entities/user.entity"
import bcrypt from "bcrypt";
import bcryptUtil from "../utils/bcrypt.util";


class UserService {
    async registerNewUser(body: registerUser) {
        try {
            const user = await User.insert({
                username: body.username,
                email: body.email,
                password: await bcrypt.hash(body.password, 11),
                fullName: body.fullName,
            });
            return user;
        }
        catch (error: any) {
            console.log(`error while inserting data`, error)
            throw new error;
        }
    }

    async loginUser(username: string, password: string) {
        const user = await User.findOne({ where: { username: username } });
        console.log(user);
        if (user) {
            const hash = await bcrypt.hash(password, 11);
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid) {
                return user;
            }
            return { "message": "wrong password" }
        }
        return { "message": "user not found" }

    }


    async getUsers() {
        const data: User[] = await User.find()
        return data;
    }

    async getUser(username: string) {
        const user = await User.findOne({ where: { username: username } });
        return user;
    }

}

export default new UserService;