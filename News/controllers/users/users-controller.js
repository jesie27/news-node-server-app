//import people from './users.js'
import cors from "cors";
//let users = people
import * as usersDao from "./users-dao.js"

//let currentUser = null;

function UsersController (app) {
    const findAllUsers = async (req, res) => {
        // const type = req.query.type
        // if(type) {
        //     const usersOfType = users
        //         .filter(u => u.type === type)
        //     res.json(usersOfType)
        //     return
        // }
        const users = await usersDao.findAllUsers();
        res.send(users)
    };
    const findUserById = async (req, res) => {
        const id = req.params.id;
        // const user = users
        //     .find(u => u._id === userId);
        const user = await usersDao.findUserById(req.params.id);
            res.send(user);

    };
    const createUser = async (req, res) => {
        // const newUser = req.body;
        // newUser.id = (new Date()).getTime() + '';
        // users.push(newUser);
        const newUser = await usersDao.createUser(req.body);
        res.json(newUser);
    };
    const deleteUser = async (req, res) => {
        const id = req.params.id;
        // users = users.filter(usr =>
        //     usr._id !== userId);
       // res.sendStatus(200);
      //  const index = users.findIndex((user) => user.id === userId);
      //   if (index === -1) {
      //       res.sendStatus(404);
      //   }
      //   users.splice(index, 1);
      //   res.sendStatus(200);
        const status = await usersDao.deleteUser(id);
        res.json(status);
    };
    const updateUser = async (req, res) => {
        const id = req.params.id;
        // const updates = req.body;
        // users = users.map((usr) =>
        //     usr.id === userId ?
        //         {...usr, ...updates} :
        //         usr
        // )
        // res.sendStatus(200);
      //  if (id === currentUser._id) {
           // req.session["currentUser"] = {...currentUser, ...req.body};


        const status = await usersDao.updateUser(id, req.body);
        res.json(status);
        //.json(status);
    };

    const login = async (req, res) => {
        const user = req.body;
        const foundUser = await usersDao.findUserByCredentials(
            req.body.username,
            req.body.password
        )

        // const foundUser = users.find(
        //     (user) => user.username === req.body.username &&
        //         user.password === req.body.password
        // );
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            res.send(foundUser);
        }
        else {
            res.sendStatus(404);
        }
    };
    const logout = async (req, res) => {
        req.session.destroy();
       // currentUser = null;
        res.sendStatus(204);
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.send(currentUser);
        }
        else {
            res.sendStatus(404);
        }
    };

    const register = async (req, res) => {
        const user = req.body;
       // const foundUser = users.find((user) => user.username === req.body.username)

            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            //users.push(newUser);
            res.json(newUser);

    };
    app.get('/api/users', findAllUsers);
    app.get('/api/users/userId/:id', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:id', updateUser);
    app.post("/api/users/login", login);
    app.post('/api/users/logout', logout);
    app.get('/api/users/profile', profile);
    app.post('/api/users/register', register);
}

export default UsersController