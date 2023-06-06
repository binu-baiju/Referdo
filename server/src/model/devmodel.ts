// dev.ts
import mongoose,{Document} from "mongoose";

export interface IDev extends Document {
  name: string;
  email: string;
  image?: string;
  profession: string;
  description: string;
  phonenumber: string;
  resume: string;
  twitterurl: string;
  githuburl: string;
  linkedinurl: string;




}

const devSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  image: { type: String },
  profession: { type: String, required: true },
  description: [{ type: String, required: true }],
  phonenumber: { type: String, required: true },
  resume: { type: String, required: true },
  twitterurl: { type: String, required: true },
  githuburl: { type: String, required: true },
  linkedinurl: { type: String, required: true },




  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProfessionalsData",
    required: true,
  },
});

const Devmodel = mongoose.model<IDev>("Dev", devSchema);

export default Devmodel;
