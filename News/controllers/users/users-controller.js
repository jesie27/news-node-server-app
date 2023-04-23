import people from './users.js'
import cors from "cors";
let users = people
import * as usersDao from "./users-dao"

//let currentUser = null;

function UsersController (app) {
    const findUsers = async (req, res) => {
        // const type = req.query.type
        // if(type) {
        //     const usersOfType = users
        //         .filter(u => u.type === type)
        //     res.json(usersOfType)
        //     return
        // }
        const users = await usersDao.findAllUsers();
        res.json(users)
    };
    const findUserById = async (req, res) => {
        // const userId = req.params.uid;
        // const user = users
        //     .find(u => u._id === userId);
        const user = await usersDao.findUserById(req.params.id);
        if (user) {
            res.json(user);
            return;
        }
        res.sendStatus(404);
    };
    const createUser = (req, res) => {
        const newUser = req.body;
        newUser._id = (new Date()).getTime() + '';
        users.push(newUser);
        res.json(newUser);
    };
    const deleteUser = (req, res) => {
        const userId = req.params.userId;
        // users = users.filter(usr =>
        //     usr._id !== userId);
       // res.sendStatus(200);
        const index = users.findIndex((user) => user.id === userId);
        if(index=== -1) {
            res.sendStatus(404);
        }
        users.splice(index, 1);
        res.sendStatus(200);
    };
    const updateUser = async (req, res) => {
        const userId = req.params.userId;
        // const updates = req.body;
        // users = users.map((usr) =>
        //     usr.id === userId ?
        //         {...usr, ...updates} :
        //         usr
        // )
        // res.sendStatus(200);
        const status = await usersDao.updateUser(userId, req.body);
        req.session["currentUser"] = req.body;
        res.send(status);
    };

    const login = (req, res) => {
        const user = req.body;
        const foundUser = users.find(
            (user) => user.username === req.body.username &&
                user.password === req.body.password
        );
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            res.send(foundUser);
        }
        else {
            res.sendStatus(404);
        }
    };
    const logout = (req, res) => {
        req.session.destroy();
       // currentUser = null;
        res.sendStatus(204);
    };

    const profile = (req, res) => {
        const currentUser =   req.session["currentUser"];
        if (currentUser) {
            res.send(currentUser);
        }
        else {
            res.sendStatus(404);
        }
    };

    const register = (req, res) => {
        const user = req.body;
        const foundUser = users.find((user) => user.username === req.body.username)
        if (foundUser) {
            res.sendStatus(404);
        }
        else {
            const newUser = {...user, id: new Date().getTime()};
            req.session["currentUser"] = newUser;
            users.push(newUser);
            res.sendStatus(201);
        }
    };
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
    app.post("/api/users/login", login);
    app.post('/api/users/logout', logout);
    app.get('/api/users/profile', profile);
    app.post('/api/users/register', register);
}

export default UsersController