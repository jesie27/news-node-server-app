import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users"

export const findAllUsers = async () => {
    const response = await axios.get (USERS_API_URL);
    return response.data;
}

export const createUser = async (user) => {
    return axios.post(USERS_API_URL, user);
}

export const updateUser = async (newUser) => {
    return axios.put(`${USERS_API_URL}/${newUser.id}`);

}
export const deleteUser = async (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`);
}
export const login = async (user) => {
    return axios.post(`${USERS_API_URL}/login`, user);
}

export const logout = async () => {
    return axios.post(`${USERS_API_URL}/logout `)''
}

export const register = async (user) => {
    return axios.post(`${USERS_API_URL}/register`, user);
}

export const profile = async () => {
    return axios.get(`${USERS_API_URL}/profile`);
}