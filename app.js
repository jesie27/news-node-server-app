import express from 'express';
import UserController from "./News/controllers/users/users-controller.js";

import CommentsController from "./News/controllers/comments/comments-controller.js";
const app = express();
app.use(express.json());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
UserController(app);
CommentsController(app);
app.listen(4000)