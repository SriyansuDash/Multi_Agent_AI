import dotenv from 'dotenv'
dotenv.config();
if(!process.env.PORT){
    throw new Error ("Cann't find PORT");
}
if(!process.env.AUTH_SERVICE){
    throw new Error("AuthService is unavailable")
}

const config= {
    PORT : process.env.PORT,
    AUTH_SERVICE : process.env.AUTH_SERVICE
}

export default config;