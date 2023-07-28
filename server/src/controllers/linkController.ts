import { Request, Response } from "express";
import { AuthenticatedRequest } from "../controllers/dashboardController";
import User, { IUser } from "../model/usermodel";

export const addLink = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // const { name, profession } = req.body;
    const email = req.user?.email;
    // const email = 'admin1@123';
    console.log(email);

    if (!email) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user = (await User.findOne({ email: email })) as IUser;
    // console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { linkName } = req.body;

    // Update the user's links
    user.Links.push(linkName);

    //create a new field with link name of type array
    // user[linkName] = [];
    user.set(linkName, []);
    // Save the updated user
    const updatedUser = await user.save();
    if (updatedUser) {
      return res
        .status(200)
        .json({ message: "Successfully added LinkName", updatedUser });
    } else {
      return res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};

export const getLinks = async (req: AuthenticatedRequest, res: Response) => {
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
      const links = user?.Links;
      res.status(200).json({ message: "Linkss retrieved", links, status: "ok" });

    }
    else {
      res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};
