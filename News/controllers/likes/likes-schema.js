import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
    userId: String,
    articleId: String,
    articleName: String,
},
    {collection: "likes"});
export default likesSchema;