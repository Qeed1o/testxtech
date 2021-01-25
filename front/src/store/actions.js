import { getUsers as apiGetUsers, getUser as apiGetUser } from "../utils/api";
import { STORE_USERS, SET_MODAL_IS_SHOW, SET_CURRENT_USER } from "./types";

const storeUsers = (payload) => ({
  type: STORE_USERS,
  payload,
});

const storeCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const getUsers = async (dispatch, page) => {
  const users = await apiGetUsers(page);
  dispatch(storeUsers(users));
};

export const setIsModalShow = (payload) => ({
  type: SET_MODAL_IS_SHOW,
  payload,
});

export const getUser = async (dispatch, id) => {
  const user = await apiGetUser(id);
  dispatch(storeCurrentUser(user));
};
