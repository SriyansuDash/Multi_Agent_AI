import dotenv from 'dotenv'
dotenv.config();

if(!process.env.PORT){
    throw new Error("Port is not defined");
};
if(!process.env.MONGO_URI){
    throw new Error("Port is not defined");
}

const config = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI
};

export default config;