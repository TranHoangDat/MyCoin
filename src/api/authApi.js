import axios from "axios";

const url = `${process.env.REACT_APP_API}/auth`;

export const createPassword = password =>
  axios.post(`${url}/createPassword`, { password: password });
