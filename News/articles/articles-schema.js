import mongoose from "mongoose";
const articleSchema = new mongoose.Schema(
{
    name: String,
    id: String,
},
    {collection: "likes"}
);
export default articleSchema;