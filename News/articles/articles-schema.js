import mongoose from "mongoose";
const articleSchema = new mongoose.Schema(
{
    name: String,
    id: String,
},
    {collection: "articles"}
);
export default articleSchema;