import  * as likesDao from "./likes-dao.js"
const LikesController = (app) => {
    const userLikesArticle = async(req, res) => {
     const userId = req.params.uid;
     const articleId = req.params.aid;
     const like = await likesDao.userLikesArticle(userId, articleId);
     res.json(like);
    }
    app.post("/api/users/:uid/likes/articles/:aid", userLikesArticle);
}
export default LikesController;