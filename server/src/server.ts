import express from "express";
import userRouter from "./routes/user.route";
import AppDataSource from "./configs/db.config";
import { constrainedMemory } from "process";
import EnvEnvironment from "./configs/env.config";

const app = express();
app.use(express.json())
app.use(userRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    }).then(()=>{
        app.listen(EnvEnvironment.PORT,()=>console.log(`Server active on PORT:${EnvEnvironment.PORT}`))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })