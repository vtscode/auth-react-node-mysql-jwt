import constant from "../constant";
import localStorageService from "services/localStorageService";

const { historypath } = constant;
const INIT_STATE = localStorageService('historypath').getAccessToken() || '';

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case historypath: {
      localStorageService('historypath').setToken(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
}