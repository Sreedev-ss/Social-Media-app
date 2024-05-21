import dotenv from 'dotenv';
import { createServer } from './webserver/server';
import connectDatabase from './database/mongodb/mongodb';
import routes from './webserver/routes/index.routes';

dotenv.config();

const app: any = createServer();

connectDatabase();

routes(app)

const PORT: any = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`USER SERVICE RUNNING ON PORT ${PORT}`));