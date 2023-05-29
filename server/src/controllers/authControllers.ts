import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import User from "../model/usermodel";
import { config } from "dotenv";

// Load environment variables
config();


export const registerOrLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = jwt.sign({
      email: email,
    }, process.env.SECRET_KEY!);

    const user = await User.findOne({ email: email });
    if (!user) {
      // No user, registration will be done
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await User.create({
        email: req.body.email,
        password: hashedPassword,
      });
      return res.json({ message: "Registration Successful", token: token });
    } else {
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      // User exists, login will be done
      if (isPasswordValid) {
        return res.json({ message: "Login Successful", token: token });
      } else {
        return res.status(401).json({ status: "error", error: "Incorrect password" });
      }
    }
  } catch (error) {
    res.json({ status: "error", error: "Authentication error occurred" });
  }
};

export const dashboard = async (req: Request, res: Response) => {
  const token = req.header("x-access-token");
  try {
    const decoded: any = jwt.verify(token!, process.env.SECRET_KEY!);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    if (user) {
      const name = user.email.split("@")[0];
      res.json({ message: "Authenticated email found", name: name, status: "ok" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Invalid token" });
  }
};
