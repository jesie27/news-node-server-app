import express from 'express';
import cors from 'cors'

import UsersController from "./News/controllers/users/users-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.send('Welcome to the News Site!')})
UsersController(app);

app.listen(4000);