import axios from 'axios';

const interceptor = axios.create({});

interceptor.interceptors.request.use( async config => {
  return config;
}, function (error) {
  return Promise.reject(error);
});
interceptor.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  Promise.reject(error);
});

export default interceptor;