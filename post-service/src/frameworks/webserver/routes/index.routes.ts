import express, { Request, Response } from 'express';
import postRoute from './post.routes'

export interface RequestUser extends Request {
    user?: any
}

export default function routes(app:express.Application){
    app.use('/post', postRoute);
    app.use((req:Request, res: Response) => {
        res.status(404).json({ code: 404, error: "Not found" })
    })
    
}