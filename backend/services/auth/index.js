import app from './src/app.js'
import config from './config/config.js'
import connectDB from './db/db.js'

connectDB();
app.listen(config.PORT, ()=>{
    console.log(`Server is running on ${config.PORT}`);
});