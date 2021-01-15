import constant from "../constant";
import localStorageService from "services/localStorageService";

const { auth } = constant;
const INIT_STATE = { user: null };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case auth.setAuth: {
      localStorageService('auth').setToken(action.payload);
      return { ...state, user: action.payload };
    }
    case auth.clearAuth:{
      localStorageService('auth').clearToken();
      return { user: null };
    }
    default:
      return state;
  }
}