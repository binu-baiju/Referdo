// dev.ts
import mongoose from "mongoose";

const devSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfessionalsData",
    required: true,
  },
});

const Devmodel = mongoose.model("Dev", devSchema);

export default Devmodel;
