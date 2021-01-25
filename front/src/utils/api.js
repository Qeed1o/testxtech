import axios from "axios";

const URI = "http://localhost:8081";

export const registerUser = async (user) => {
  const { data } = await axios.post(`${URI}/register`, user);
  return data;
};

export const getUsers = async (offset) => {
  const { data } = await axios.get(`${URI}/?offset=${offset * 10}`);
  return data;
};

export const getUser = async (id) => {
  const { data } = await axios.get(`${URI}/user/${id}`);
  return data;
};
