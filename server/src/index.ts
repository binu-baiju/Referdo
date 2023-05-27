import express, { Request, Response } from "express";
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
import bcrypt from "bcrypt";

import User from "../src/model/usermodel";

import { config } from "dotenv";
config();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/registerOrLogin", async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const token = jwt.sign({
      email:email,
  },process.env.SECRET_KEY)
    const user = await User.findOne({ email: email });
    if (!user) {
      //no user,register will be done
      const hasedPassword = await bcrypt.hash(req.body.password,10);
      await User.create({
        email: req.body.email,
        password: hasedPassword,
      });
      return res.json({ message: "Registeration Successfull",token:token });
    } 
    else{
        const isPasswordValid = await bcrypt.compare(req.body.password,user.password);
        //user exists login will be done
      if (isPasswordValid) {
        
        return res.json({ message: "Login successful",token:token });
      } else {
        return res.status(401).json({ status: "error", error: "Incorrect password" });
      }
    }
       
    
  } catch (error) {
    res.json({ status: "error", error: "Auth error happened" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT} `);
});

app.listen(PORT);
