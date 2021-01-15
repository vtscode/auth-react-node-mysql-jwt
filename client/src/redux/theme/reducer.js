import constant from "../constant";
import localStorageService from "services/localStorageService";

const INIT_STATE = { mode : 'vertical', theme : 'light', colorheader : 'rgb(255, 241, 184)' };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case constant.theme: {
      const newTheme = {...state, ...action.payload};
      localStorageService('theme').setToken(newTheme);
      return newTheme;
    }
    default:
      return state;
  }
}