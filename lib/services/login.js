import { fetchAPI } from '../api';
import axios from 'axios';
const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`;

export const logInUser = async (codeAndPassword) => {
  try {
    const formData = Object.keys(codeAndPassword).reduce((result, key) => {
      result.append(key, codeAndPassword[key]);
      return result;
    }, new FormData());
    const res = await (await axios.post(`${url}/login`, formData)).data;
    const data = {
      token: res.item,
    };
    return data;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};
