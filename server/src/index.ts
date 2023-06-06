import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
const cors = require("cors");
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardroutes";
import formRoutes from "./routes/formRoutes";

// const option = {
//   socketTimeoutMS: 30000,
//   keepAlive: true,
//   reconnectTries: 30000
// };

config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", formRoutes);





app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}`);
});

app.listen(PORT);



// import express, { Request, Response } from "express";
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require('jsonwebtoken');
// import bcrypt from "bcrypt";

// import User from "../src/model/usermodel";

// import { config } from "dotenv";
// config();

// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/api/registerOrLogin", async (req: Request, res: Response) => {
//   // console.log(req.body);
//   const { email, password } = req.body;
//   try {
//     const token = jwt.sign({
//       email:email,
//   },process.env.SECRET_KEY)
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       //no user,register will be done
//       const hasedPassword = await bcrypt.hash(req.body.password,10);
//       await User.create({
//         email: req.body.email,
//         password: hasedPassword,
//       });
//       return res.json({ message: "Registeration Successfull",token:token });
//     } 
//     else{
//         const isPasswordValid = await bcrypt.compare(req.body.password,user.password);
//         //user exists login will be done
//       if (isPasswordValid) {
        
//         return res.json({ message: "Login successful",token:token });
//       } else {
//         return res.status(401).json({ status: "error", error: "Incorrect password" });
//       }
//     }
       
    
//   } catch (error) {
//     res.json({ status: "error", error: "Auth error happened" });
//   }
// });

// app.get("/api/dashboard", async (req: Request, res: Response) => {
//   const token = req.header('x-access-token');
//   try {
//     const decoded = jwt.verify(token,process.env.SECRET_KEY)
//   const email = decoded.email;
//   // console.log(email);
  
//   const user = await User.findOne({email:email});
//   console.log(user);
  
//   if(user){
//     const name = user.email.split('@')[0];
//     res.json({message:"Authenticated email found",name:name,status:'ok'})
//   }

//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error: "Invalid token" })
    
    
//   }
  
// });

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

// mongoose.connect(process.env.MONGO_URL!).then(() => {
//   console.log(`Listening on port ${PORT} `);
// });

// app.listen(PORT);
