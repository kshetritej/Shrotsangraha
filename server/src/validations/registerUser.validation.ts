import {
  validate,
  Length,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';
import { User } from '../entities/user.entity';

class registerValidation{
    @Length(3,12)
    @IsNotEmpty()
    username:string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(8,16)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    fullName: string;
//@ts-ignore
} 

export default new registerValidation;