// dev.ts
import mongoose,{Document} from "mongoose";

export interface IDev extends Document {
  name: string;
  email: string;
  image?: string;
  profession: string
}

const devSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  image: { type: String },
  profession: { type: String },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfessionalsData",
    required: true,
  },
});

const Devmodel = mongoose.model<IDev>("Dev", devSchema);

export default Devmodel;
