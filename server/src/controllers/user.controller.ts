import { Route, Post, Request, Controller, Get, Body, Tags, Query } from "tsoa";
import express from "express";
import UserService from "../services/user.service";
import { loginData } from "../@types/loginData.type";



@Route("")
@Tags("User Route")
class UserController extends Controller {

    @Get("/getUsers")
    async getUsers() {
        return UserService.getUsers();
    }

    @Get("/getUsers/{username}")
    async getUser(username: string) {
        return UserService.getUser(username);
    }

    @Post("/login")
    async loginUser(@Request() req: express.Request, @Body() body: loginData) {
        const data = await UserService.loginUser(body.username, body.password);

        return data;
    }

    @Post("/register")
    async registerUser(@Request() req: express.Request, @Body() body: any) {
        const data = await UserService.registerNewUser(body);

        return data;
    }


}

export { UserController };