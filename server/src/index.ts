import express, { Request, Response } from "express";
const app = express();
const mongoose = require('mongoose');

import {config} from 'dotenv';
config();

const PORT = 5000;

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello")
});

mongoose.connect(process.env.MONGO_URL!)
    .then(()=>{
        console.log(`Listening on port ${PORT} `);
        
    })


app.listen(PORT);