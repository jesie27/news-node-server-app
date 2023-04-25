import followsModel from "./follows-model.js";
export const userFollowsUser = async (follower, followed) => {
    return await followsModel.create({follower, followed});
};
export const unfollowUser = async (follower, followed) => {
    return await followsModel.deleteOne({follower, followed});
};
export const findFollowsByFollowerandFollowed = async(follower, followed) => {
    return await followsModel.findOne({follower, followed});
};
export const findFollowsByFollowerId = async (follower) => {
    return await followsModel
        .find({follower})
        .populate("followed", "username")
        .exec();
};
export const findFollowsByFollowedId = async(followed) => {
    return await followsModel
        .find({followed})
        .populate("follower", "username")
        .exec();
};
