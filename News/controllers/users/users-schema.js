import mongoose, {mongo} from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: {type: String},
        password: {type: String},
        firstName: String,
        lastName: String,
        handle: String,
        email: String,
        phone: String,
        role: String,
        bio: String,
        id: String,
        location: String,
        dateOfBirth: String,
        dateJoined: String,
        followingCount: String,
        followersCount: String,
    },
{
    collection: "users",
}
);


