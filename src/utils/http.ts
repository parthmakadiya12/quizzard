import ActualAxios from "axios";

const axios = ActualAxios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

export default axios;
