import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find();

export const findUserById = () => usersModel.findById(id);

export const createUser = (user) => usersModel.create(user);

export const updateUser = (id, user) => usersModel.updateOne({id:id}, user);

export const deleteUser = (id) => usersModel.deleteOne({id:id});
