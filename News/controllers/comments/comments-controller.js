import commentsData from "./comments.js";
let comments = commentsData;
const CommentsController = (app) => {
    app.get('/api/comments', findComments);
    app.post('/api/comments', createComment);
    app.put('/api/comment/:cid', updateComment);
    app.delete('/api/comment/:cid', deleteComment);
}


const createComment = (req, res) => {}
const findComments  = (req, res) => {
    res.json(comments);
}
const updateComment = (req, res) => {}
const deleteComment = (req, res) => {}

export default CommentsController