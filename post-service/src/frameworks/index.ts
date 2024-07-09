import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
    
}  

import { createServer } from './webserver/server';
import connectDatabase from './database/mongodb/mongodb';
import routes from './webserver/routes/index.routes';

const app: any = createServer();

connectDatabase();

routes(app)

const PORT: any = process.env.PORT || 4001;  

app.listen(PORT, () => console.log(`POST SERVICE RUNNING ON PORT ${PORT}`));