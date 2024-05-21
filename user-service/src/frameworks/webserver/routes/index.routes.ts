import express, { Request, Response } from 'express';
import userRoute from './user.routes';


export default function routes(app:express.Application){
    app.use('/user', userRoute);
    app.use((req:Request, res: Response) => {
        res.status(404).json({ code: 404, error: "Not found" })
    })
}