import { Request, Response } from "express";
import Devmodel, { IDev } from "../model/devmodel";
import User, { IUser } from "../model/usermodel";

export interface AuthenticatedRequest extends Request {
    user?: { email: string };
  }
  

export const getHrDevs = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    console.log(userId);

    if (!userId) {
      return res
        .status(401)
        .json({ status: "error", error: "User email is missing" });
    }

    const user: IUser | null = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user) {
        //  res.json({ message: 'User found', user, status: 'ok' });
        // Populate the 'devs' field with the corresponding Dev documents and limit the results to the first three
        //  const populatedUser: Document<any, any> | null =
        // Get the first three dev ids from the user object
        const devIds: string[] = user.devs;
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const DEFAULT_LIMIT = 8;
  
        const devs: IDev[] = await Devmodel.find({ _id: { $in: devIds } }).skip(skip).limit(DEFAULT_LIMIT);
        res.json({ message: "Devs retrieved", devs,user, status: "ok" });
      } else {
        res.status(404).json({ status: "error", error: "User not found" });
      }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};
