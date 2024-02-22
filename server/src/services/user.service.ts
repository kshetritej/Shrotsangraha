import { registerUser } from "../@types/registerUser.type";
import { User } from "../entities/user.entity"
import bcrypt from "bcrypt";


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
        catch (error) {
            console.log(`error while inserting data`, error)
            throw new error;
        }
    }

    async getUsers() {
        const data: User[] = await User.find()
        return data;
    }

    async getUser(username:string){
        const user = await User.findOne({where:{username:username}});
        return user;
    }

}

export default new UserService;