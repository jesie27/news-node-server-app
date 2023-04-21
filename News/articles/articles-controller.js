import * as dao from "./articles-dao.js";

const ArticlesController = (app) => {
    const createArticle = async(req, res) => {
        const article = req.body;
        const newArticle = await dao.createArticle(article);
        res.json(newArticle);
    }
    app.post("api/articles", createArticle);

}
export default ArticlesController;