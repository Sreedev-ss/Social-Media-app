import { Request, Response } from "express";

export const expressCallBack = (controller: any) => {
    return async (req: Request, res: Response) => {
        try {
            const response = await controller(req)
            res.send(response)
        } catch (error) {
            const statusCode = error?.statusCode ? error.statusCode : 500;
            res.status(statusCode).json({code: statusCode, error: error.message || 'Internal Server Error'});
        }
    }
}