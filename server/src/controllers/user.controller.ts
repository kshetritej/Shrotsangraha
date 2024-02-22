import { Route, Post, Request, Controller, Get, Body, Tags, Query } from "tsoa";
import express from "express";
import UserService from "../services/user.service";



@Route("users")
@Tags("User")
class UserController extends Controller {

    @Get("/getUsers")
    async getUsers() {
        return UserService.getUsers();
    }

    @Get("/getUsers/{username}")
    async getUser(username: string) {
        return UserService.getUser(username);
    }



    @Post("/user")
    async registerUser(@Request() req: express.Request, @Body() body: any) {
        const data = await UserService.registerNewUser(body);

        return data;
    }


}

export { UserController };