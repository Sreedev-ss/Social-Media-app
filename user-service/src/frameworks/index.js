const dotenv = require('dotenv');
const userRoute = require('./webserver/routes/user.routes');
const connectDatabase = require('./database/mongodb/mongodb');
const createServer = require('./webserver/server');

dotenv.config();

const app = createServer();

connectDatabase();

app.use('/user', userRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`USER SERVICE RUNNING ON PORT ${PORT}`));