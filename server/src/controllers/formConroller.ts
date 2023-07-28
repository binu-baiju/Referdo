import { Request, Response } from "express";
// import * as MulterS3  from "multer-s3";
import User, { IUser } from "../model/usermodel";
import Devmodel, { IDev } from "../model/devmodel";

// import multer from "multer";
// import multerS3 from "multer-s3";

require("dotenv").config();
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
// import { File as ExpressFile } from "express-serve-static-core";
// import { File as MulterFile } from "multer";

interface CustomRequest extends Request {
      file?: any  ;
      // Express.MulterS3.File
      // Assuming you're using multer-s3 for file upload
    // file?: {
    //   fieldname: string;
    //   originalname: string;
    //   encoding: string;
    //   mimetype: string;
    //   size: number;
    //   bucket: string;
    //   key: string;
    //   acl: string;
    //   contentType: string;
    //   contentDisposition: string;
    //   storageClass: string;
    //   serverSideEncryption: string;
    //   metadata: {
    //     fieldName: string;
    //   };
    //   location: string;
    //   etag: string;
    };
  

export const addDevs = async (req: CustomRequest, res: Response) => {
    try {
      // const { name, profession } = req.body;
    



        console.log(req.file);
        

      const userId = req.params.userId;
      const linkName = req.params.linkName;

      console.log(userId);
      console.log(linkName);
      
      if (!userId) {
        return res
          .status(401)
          .json({ status: "error", error: "User id is missing" });
      }
  
      const user = await User.findOne({ userId });
     console.log("USER FOUND!!!!!!!!!!!!!!!")
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
     
      
      //Create a new Dev document
      const newDev = new Devmodel({
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        phonenumber: req.body.phonenumber,
        description: req.body.description,
        resume:req.file?.location,
        twitterurl: req.body.twitterurl,
        githuburl: req.body.githuburl,
        linkedinurl: req.body.linkedinurl,
        user: user._id, // Associate the dev with the user
      });
      // console.log(newDev);
  
      // Save the newDev document
      await newDev.save();
  
      // Push the newDev's ObjectId to the user's 'devs' array
      user.devs.push(newDev._id);
      await user.save();
  
      res.json({ message: "Dev added successfully",newDev });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "error", error: "Internal server error" });
    }
  };
  
export const addDev = async (req: CustomRequest, res: Response) => {
  try {
    
    const userId = req.params.userId;
    const linkName = req.params.linkName;

      console.log(userId);
      console.log(linkName);

    if (!userId) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user = await User.findOne({ _id:userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Create a new Dev document
    const newDev = new Devmodel({
      name: req.body.name,
      email: req.body.email,
      profession: req.body.profession,
      description: req.body.description,
      phonenumber: req.body.phonenumber,
      resume:req.file?.location,
      twitterurl: req.body.twitterurl,
      githuburl: req.body.githuburl,
      linkedinurl: req.body.linkedinurl,
      user: user._id, // Associate the dev with the user
    });
    console.log(newDev);

    // Save the newDev document
    await newDev.save();

    // Push the newDev's ObjectId to the user's 'devs' array
    user.devs.push(newDev._id);
    
          // (user as any)[linkName].push(newDev._id);
          // (user[linkName] as any[]).push(newDev._id);
          user.set(linkName, [...(user.get(linkName) || []), newDev._id]);

    await user.save();

    res.json({ message: "Dev added successfully" });
    console.log(req.file);
  // res.send("successfully uploaded")
  } catch (error) {
    console.log(error);
    
  }

  
  
}
export async function sample(req:CustomRequest,res:Response){
  console.log(req.file);
  
  }
  