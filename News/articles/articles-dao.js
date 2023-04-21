import articlesModel from "./articles-model.js";

export const createArticle  = async (article) => {
    return  articlesModel.create(article);
}

