import { Route, Post, Request, Controller, Get, Body, Tags } from "tsoa";
import express from "express";
import UserService from "../services/user.service";



@Route("users")
@Tags("User")
class UserController extends Controller {
    @Get("profile")
    async getJohn() {
        return UserService.getJohn();
    }
    @Post("/user")
    async registerUser(@Request() req: express.Request, @Body() body: any) {
        const data = await UserService.registerNewUser(body);

        return data;
    }

}

export { UserController };