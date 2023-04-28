import likesModel from "./likes-model.js";
export const userLikesArticle = async (userId, articleId) => {
    return likesModel.create ({userId, articleId});
};

export const findLikesByUserId = async(userId) => {
    return likesModel.find({userId});
}

export const findLikersByArticle = async(articleId) => {
    return likesModel.find({articleId});
}