import  * as likesDao from "./likes-dao.js"
const LikesController = (app) => {
    const userLikesArticle = async(req, res) => {
     const userId = req.params.uid;
     const articleId = req.params.aid;
     const like = await likesDao.userLikesArticle(userId, articleId);
     res.json(like);
    }

    const findLikesByUserId = async(req, res) => {
        const userId = req.params.uid;
        const likes = await likesDao.findLikesByUserId(userId);
        res.json(likes);
    }
    app.post("/api/users/:uid/likes/articles/:aid", userLikesArticle);
    app.get("/api/users/:uid/likes", findLikesByUserId);
}
export default LikesController;