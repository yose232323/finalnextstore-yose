import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  ImageUrl: { type: String },
  imagePublicId: { type: String },
});
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
