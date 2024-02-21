import express from "express";
import AppDataSource from "./configs/db.config";
import EnvEnvironment from "./configs/env.config";
//@ts-ignore
import RegisterRoutes from "../build/routes";

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../public/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
RegisterRoutes(app)


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    }).then(()=>{
        app.listen(EnvEnvironment.PORT,()=>console.log(`Server active on PORT:${EnvEnvironment.PORT}`))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


