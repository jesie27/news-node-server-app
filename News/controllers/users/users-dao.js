import usersModel from "./users-model.js";
export const findAllUsers = async () => {
    const users = await usersModel.find();
    return users;
}

export const findUserById = async(id) => {
   const user = await usersModel.findById(id);
   return user;
}
export const findUserByCredentials = async (username, password) => {
    const user = await usersModel.findOne({username, password});
    return user;
}
export const createUser = async (user) => {
    const newUser = await usersModel.create(user);
    return newUser;
}

export const updateUser = async (id, user) => {
    console.log('update')
    console.log(user)
    console.log(id);
    const status = await usersModel.updateOne({_id: id}, user);
    return status;
}

export const deleteUser = async (id) => {
    const status =await usersModel.deleteOne({_id: id});
    return status;
}
