import { initURL } from "utils";
import interceptor from './interceptors';

export const headers = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
};
export const configRequest = (method, url, customurl = initURL, data) => {
  return { headers, method, url: `${customurl}${url}`, data };
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
      console.log(err);
    }
  },
  post: async (url, customUrl,params,others = {}) => {
    let conf = configRequest('post', url, customUrl, params);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
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
      console.log(err);
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
      console.log(err);
    }
  },
  delete: async (url, customUrl, params, others = {}) => {
    let conf = configRequest('delete', url, customUrl, params);
    if(Object.keys(others).length){
      conf = {...conf,...others};
    }
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};