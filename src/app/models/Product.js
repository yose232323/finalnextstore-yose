import { Description } from "@radix-ui/react-dialog";
import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Description: { type: String, required },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  imagePublicId: { type: String },
});

export default mongoose.models.Product ||
  mongoose.model(`Product,ProductSchema`);
