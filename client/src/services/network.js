import Axios from "axios";
import { initURL } from "utils";
import globalState from "redux/store";
import interceptor from './interceptors';

export const cancelToken = Axios.CancelToken.source().token;
export const headers = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
};
export const getToken = () => {
  if(globalState.getState().auth.user){
    headers['Authorization'] = `Bearer ${globalState.getState().auth.user.token}`;
    return headers;
  }
  return headers;
}
export const configRequest = (method, url, customurl = '', data) => {
  let obj = { headers: getToken(), method, data, cancelToken }
  if(customurl) {
    return { ...obj, url: `${customurl}${url}` };
  }
  return { ...obj, url: `${initURL}${url}` };
};

export default {
  get : async (url, customUrl, others = {}) => {
    let conf = configRequest('get', url, customUrl);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log('network error : ', err);
    }
  },
  post: async (url, customUrl,params,others = {}) => {
    let conf = configRequest('post', url, customUrl, params);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const {data} = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log('network error : ', err);
    }
  },
  patch: async (url, customUrl, params, others = {}) => {
    let conf = configRequest('patch', url, customUrl, params);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.create({}).request(conf);
      return data;
    } catch (err) {
      console.log('network error : ', err);
    }
  },
  put: async (url, customUrl, params, others = {}) => {
    let conf = configRequest('put', url, customUrl, params);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log('network error : ', err);
    }
  },
  delete: async (url, customUrl, others = {}) => {
    let conf = configRequest('delete', url, customUrl);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log('network error : ', err);
    }
  }
};