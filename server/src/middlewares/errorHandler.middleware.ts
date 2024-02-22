import { Request,Response, NextFunction } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
   return res.status(500).json({
    "status":"error",
    "error":err.message
   }) ;
}

export {errorHandler};