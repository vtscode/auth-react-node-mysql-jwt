import constant from "../constant";

const { auth } = constant;
export const clearAuth = () => {
  return {
    type : auth.clearAuth
  }
};

export const setAuth = (value) => {
  return {
    type : auth.setAuth,
    payload : value
  }
};