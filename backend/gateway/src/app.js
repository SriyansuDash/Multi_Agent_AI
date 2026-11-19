import express from 'express';
import config from '../config/config.js'
import proxy from 'express-http-proxy';

const app = express();

app.use('/auth', proxy(config.AUTH_SERVICE));

app.get('/', (req,res)=>{
    res.json({message: "This is gateway"});
})
export default app;