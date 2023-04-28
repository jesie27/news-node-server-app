import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
    userId: String,
    articleId: String,
    articleName: String,
    articleLink: String
},
    {collection: "likes"});
export default likesSchema;