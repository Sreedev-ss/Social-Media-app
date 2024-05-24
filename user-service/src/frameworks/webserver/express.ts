import { Request, Response } from "express";
import { RequestUser } from "./routes/index.routes";

export const expressCallBack = (controller: any) => {
    return async (req: RequestUser, res: Response) => {

        try {
            const response = await controller(req,res)
            res.send(response)
        } catch (error) {
            const statusCode = error?.statusCode ? error.statusCode : 500;
            res.status(statusCode).json({code: statusCode, error: error.message || 'Internal Server Error'});
        }
    }
}