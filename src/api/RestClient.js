/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const getHttpHeaders = (isAuthenticated = false) => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
      },
    };
  }

  return {};
};

const get = path => axios.get(path, getHttpHeaders());

const del = path => axios.delete(path, getHttpHeaders());

const post = (path, data) => axios.post(path, data, getHttpHeaders());

const put = (path, data) => axios.post(path, data, getHttpHeaders());

const patch = (path, data) => axios.post(path, data, getHttpHeaders());

export default {
  get,
  del,
  post,
  put,
  patch,
};
