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
    const findLikersByArticle = async(req, res) => {
        const articleId = req.params.aid;
        const likers = await likesDao.findLikersByArticle(articleId);
        res.json(likers);
    }

    app.post("/api/users/:uid/likes/articles/:aid", userLikesArticle);
    app.get("/api/users/:uid/likes", findLikesByUserId);
    app.get("/api/users/:aid/likers", findLikersByArticle);

}
export default LikesController;