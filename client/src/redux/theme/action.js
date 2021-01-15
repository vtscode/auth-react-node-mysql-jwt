import constant from "../constant";

const { theme } = constant;
export const changeTheme = (value) => {
  return {
    type : theme,
    payload : value
  }
};
