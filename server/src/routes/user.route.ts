import express,{Request, Response} from "express";

const userRouter= express.Router();

userRouter.get("/",(req:Request, res: Response) => {
    res.send("hellowww");
})


userRouter.get("/home",(req:Request,res:Response)=>res.send("hello home"))



export default userRouter;
