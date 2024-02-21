import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
dotenv.config();

const app = express();
app.use(express.json())
app.use(userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on PORT: ${process.env.PORT}`);
})