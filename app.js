import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UsersController from "./News/controllers/users/users-controller.js";
import ArticlesController from "./News/articles/articles-controller.js";
import session from "express-session";
import SessionController from "./News/session-controller.js";
import LikesController from "./News/controllers/likes/likes-controller.js";
mongoose.connect('mongodb://127.0.0.1:27017/news');

const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(
    session({
        secret: "process.env.SECRET",
        resave: false,
        cookie: {secure: false}

    })
)
app.get('/', (req, res) => {res.send('Welcome to the News Site!')})
UsersController(app);
ArticlesController(app);
SessionController(app);
LikesController(app);
app.listen(4000);