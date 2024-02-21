import { registerUser } from "src/@types/registerUser.type";
import { User } from "src/entities/user.entity"
import bcryptUtil from "src/utils/bcrypt.util";

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