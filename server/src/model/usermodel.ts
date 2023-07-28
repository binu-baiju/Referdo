import mongoose, { PopulatedDoc, Schema,Document } from "mongoose";
import { IDev } from "./devmodel";

export interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
  profession?: string;
  devs: string[];
  Links: string[];
  [key: string]: any; // Allow dynamic fields

  // Schema.Types.ObjectId[];
  // PopulatedDoc<IDev>[];
}

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    profession: { type: String },
    devs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dev" }],
    Links: [{ type: String,default: [] }],
    
  },
  {
    collection: "professional-data",
    strict: false, // Enable dynamic fields
  }
);

const userModel = mongoose.model("ProfessionalsData", User);

export default userModel;
