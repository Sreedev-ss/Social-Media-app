import dotenv from 'dotenv';
import userRoute from './webserver/routes/user.routes';
import { createServer } from './webserver/server';

dotenv.config();

const app: any = createServer();

app.use('/user', userRoute);

const PORT: any = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`USER SERVICE RUNNING ON PORT ${PORT}`));