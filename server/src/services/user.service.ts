import { registerUser } from "../@types/registerUser.type";
import { User } from "../entities/user.entity"
import bcryptUtil from "../utils/bcrypt.util";

class UserService {
    async registerNewUser(body:registerUser){
        const user = await User.insert({
            username: body.username,
            email:body.email,
            //@ts-ignore
            password: bcryptUtil.hashPassword(body.password),
            fullName: body.fullName,
        })
        return user;
    }

    async getUsers(){
        const data:User[] = await User.find()
        return data;
    }

    getJohn(){
        return {
            name: "john",
            surname: "khan"
        }
    }
}

export default new UserService;