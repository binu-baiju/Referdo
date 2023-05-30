import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    profession: { type: String },
    devs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dev" }],
  },
  {
    collection: "professional-data",
  }
);

const userModel = mongoose.model("ProfessionalsData", User);

export default userModel;
