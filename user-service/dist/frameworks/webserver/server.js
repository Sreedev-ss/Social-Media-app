import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
export function createServer() {
    const app = express();
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    return app;
}
