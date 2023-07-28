import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../model/usermodel";
import Devmodel, { IDev } from "../model/devmodel";
import { Document } from "mongoose";

export interface AuthenticatedRequest extends Request {
  user?: { email: string };
}

export const dashboard = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.user?.email;
    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user = await User.findOne({ email });
    // console.log(user);

    if (user) {
      res.json({ message: "User found", user, status: "ok" });
    } else {
      res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

export const updateUserProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { name, profession } = req.body;
    const email = req.user?.email;

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },

      {
        $set: { name: name, profession: profession || "Full Stack Developer" },
      },
      { new: true, upsert: true }
    );
    console.log(updatedUser);
    if (updatedUser) {
      return res.json({
        status: "ok",
        message: "Profile updated successfully",
        updatedUser,
      });
    } else {
      return res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }

  // try {
  //     const email = req.user?.email;
  //     if (!email) {
  //       return res.status(401).json({ status: 'error', error: 'User email is missing' });
  //     }

  //     const user = await User.updateOne({ email },{$set:{name:req.body.name}});

  //     return  res.json({ message: 'Authenticated email found', status: 'ok' });

  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ status: 'error', error: 'Internal server error' });
  //   }
};

export const addDevs = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // const { name, profession } = req.body;
    const email = req.user?.email;

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Create a new Dev document
    const newDev = new Devmodel({
      name: req.body.name,
      email: req.body.email,
      profession: req.body.profession,
      phonenumber: req.body.phonenumber,
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

    res.json({ message: "Dev added successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};

export const getSomeDevs = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.user?.email;

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user: IUser | null = await User.findOne({ email });
    // console.log(user);

    if (user) {
      //  res.json({ message: 'User found', user, status: 'ok' });
      // Populate the 'devs' field with the corresponding Dev documents and limit the results to the first three
      //  const populatedUser: Document<any, any> | null =
      // Get the first three dev ids from the user object
      const devIds: string[] = user.devs.slice(-5);
      const devs: IDev[] = await Devmodel.find({ _id: { $in: devIds } }).exec();
      res.json({ message: "Devs retrieved", devs, status: "ok" });
    } else {
      res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

export const deleteDev = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.user?.email;
    const { devId } = req.body;
    console.log("devid", devId);

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }
    const user: IUser | null = await User.findOne({ email });
    // console.log(user);

    if (user) {
      // Check if the dev exists in the user's devs array
      const devIndex = user.devs.findIndex((dev) => dev.toString() === devId);

      console.log("Dev Index:", devIndex);
      console.log("Dev Id:", devId);

      if (devIndex === -1) {
        return res.status(404).json({ message: "Dev not found" });
      }

      // Remove the dev from the user's devs array
      user.devs.splice(devIndex, 1);

      // Save the updated user
      await user.save();
      await Devmodel.findOneAndDelete({ _id: devId });
    }
    res.json({ status: "ok", message: "Dev deleted successfully" });
  } catch (error) {
    console.log("Error deleting dev:", error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

export const getDevs = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.user?.email;

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user: IUser | null = await User.findOne({ email });
    console.log(user);

    if (user) {
      //  res.json({ message: 'User found', user, status: 'ok' });
      // Populate the 'devs' field with the corresponding Dev documents and limit the results to the first three
      //  const populatedUser: Document<any, any> | null =
      // Get the first three dev ids from the user object
      const devIds: string[] = user.devs;
      const skip = req.query.skip ? Number(req.query.skip) : 0;
      const DEFAULT_LIMIT = 8;

      const devs: IDev[] = await Devmodel.find({ _id: { $in: devIds } }).skip(skip).limit(DEFAULT_LIMIT);
      res.json({ message: "Devs retrieved", devs, status: "ok" });
    } else {
      res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

// export const publicUrlGenerator = async (
//   req: AuthenticatedRequest,
//   res: Response
// ) => {
//   const email = req.user?.email;
//   if (!email) {
//     return res
//       .status(401)
//       .json({ status: "error", error: "User email is missing" });
//   }
//   const user: IUser | null = await User.findOne({ email });
//   console.log(user);

//   const id = user?._id;
//   console.log(id);
  
//   res.json({ message: "Got id of duser", id, status: "ok" });

// };
