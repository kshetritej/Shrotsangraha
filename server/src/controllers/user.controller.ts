import {Route,Post,Request, Controller, Get, Body, Tags} from "tsoa";
import express from "express";
import UserService from "src/services/user.service";

    

@Route("users")
@Tags("User")
export class UserController extends Controller{

    @Post("/user")
    async registerUser(@Request() req:express.Request, @Body() body:any){
       const data = await UserService.registerNewUser(body);

       return data;
    }
    @Get("profile")
    async getJohn(){
        return UserService.getJohn();
    }
}
