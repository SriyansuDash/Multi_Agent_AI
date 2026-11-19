import mongoose from 'mongoose'
import config from '../config/config.js'
import dns from 'dns'

dns.setServers([
    '8.8.8.8', '1.1.1.1'
])

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(config.MONGO_URI);
        
        if(connect){
            console.log('Database Connected');
        }
    }
    catch(error){
        console.log(error);
        console.log(process.exit(1));
    }
}

export default connectDB;