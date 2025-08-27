import { mongoose } from "@radix-ui/react-dialog";
import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  imagePublicId: { type: String },
  category: { type: String, required: true },
  rating: {},
  rate: { type: Number, default: 0 },
  count: { type: Number, default: 0 },
});

export default mongoose.models.Product ||
  mongoose.model(`Product,ProductSchema`);
