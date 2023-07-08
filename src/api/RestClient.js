/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const getHttpHeaders = (token = null) => {
  // Add your custom logic here, for example add a Token to the Headers
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {};
};

const get = (path, token = null) => axios.get(path, getHttpHeaders(token));

const del = (path, token = null) => axios.delete(path, getHttpHeaders(token));

const post = (path, data, token = null) => axios.post(path, data, getHttpHeaders(token));

const put = (path, data, token = null) => axios.post(path, data, getHttpHeaders(token));

const patch = (path, data, token = null) => axios.post(path, data, getHttpHeaders(token));

export default {
  get,
  del,
  post,
  put,
  patch,
};
