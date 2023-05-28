import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "professional-data",
  }
);

const model = mongoose.model("ProfessionalsData", User);

export default model;