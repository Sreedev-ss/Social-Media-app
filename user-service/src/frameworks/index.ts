import dotenv from 'dotenv';
import userRoute from './webserver/routes/user.routes';
import { createServer } from './webserver/server';
import connectDatabase from './database/mongodb/mongodb';

dotenv.config();

const app: any = createServer();

connectDatabase();

app.use('/user', userRoute);

const PORT: any = process.env.PORT || 4000;
console.log(process.env.PORT);
app.listen(PORT, () => console.log(`USER SERVICE RUNNING ON PORT ${PORT}`));