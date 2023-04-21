import mongoose from "mongoose";
import articlesSchema from "./articles-schema.js";
const articlesModel = mongoose.model("articles", articlesSchema);
export default articlesModel;