import people from './users.js'
let users = people

let currentUser = null;
function UsersController (app) {
    const findUsers = (req, res) => {
        const type = req.query.type
        if(type) {
            const usersOfType = users
                .filter(u => u.type === type)
            res.json(usersOfType)
            return
        }
        res.json(users)
    };
    const findUserById = (req, res) => {
        const userId = req.params.uid;
        const user = users
            .find(u => u._id === userId);
        res.json(user);
    };
    const createUser = (req, res) => {
        const newUser = req.body;
        newUser._id = (new Date()).getTime() + '';
        users.push(newUser);
        res.json(newUser);
    };
    const deleteUser = (req, res) => {
        const userId = req.params['uid'];
        users = users.filter(usr =>
            usr._id !== userId);
        res.sendStatus(200);
    };
    const updateUser =  (req, res) => {
        const userId = req.params['uid'];
        const updates = req.body;
        users = users.map((usr) =>
            usr.id === userId ?
                {...usr, ...updates} :
                usr
        )
        res.sendStatus(200);
    };

    const login = (req, res) => {
        const user = req.body;
        const foundUser = users.find(
            (user) => user.username === req.body.username &&
                user.password === req.body.password
        );
        if (foundUser) {
            currentUser = foundUser;
            res.send(foundUser);
        }
        else {
            res.sendStatus(404);
        }
    };
    const logout = (req, res) => {
        currentUser = null;
        res.sendStatus(204);
    };

    const profile = (req, res) => {
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
            currentUser = newUser;
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