import constant from "../constant";

const { historypath } = constant;
export const setHistoryPath = (value) => {
  return {
    type : historypath,
    payload : value
  }
};