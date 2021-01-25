import { STORE_USERS, SET_MODAL_IS_SHOW, SET_CURRENT_USER } from "./types";

const defaultState = { users: [], isModalShow: false, currentUser: {} };

export const RootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_USERS:
      return { ...state, users: action.payload };
    case SET_MODAL_IS_SHOW:
      return { ...state, isModalShow: action.payload };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
