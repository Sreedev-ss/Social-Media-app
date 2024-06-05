import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { RequestUser } from "../webserver/routes/index.routes";


export const authenticate = (req: RequestUser, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    try {
        const decoded = verifyAccessToken(token);
        req.user = decoded;
        console.log(new Date(req.user.exp * 1000).toLocaleString())
        next();
    } catch (error) {
        res.status(403).json({ message: 'Forbidden' });
    }
}

export const isLoggedIn = (req: RequestUser, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return next();
    }
    try {
      const decoded = verifyAccessToken(token);
      req.user = decoded; 
      next();
    } catch (err) {
      return next(); 
  };
}

export const checkLoggedIn = (req: RequestUser, res: Response, next: NextFunction) => {
    if (req.user) {
        return res.status(403).send('You are already logged in.')
    }
    next();
}
