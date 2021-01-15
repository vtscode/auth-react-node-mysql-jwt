import axios from 'axios';
import { Notif } from "components";
const interceptor = axios.create({});

interceptor.interceptors.request.use( async config => {
  return config;
}, function (error) {
  return Promise.reject(error);
});
interceptor.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  if(error.response){
    Notif({type : 'error', response : {code : 'Error', message : error.response.data.error } })
  }
  return error.message;
  // Promise.reject(error);
});

export default interceptor;