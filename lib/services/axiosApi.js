import axios from 'axios';

const DB_URI =
  process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`
    : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`;

export default () => {
  return axios.create({
    baseURL: DB_URI,
    // headers: {
    //   ...(token && { Authorization: `Bearer ${token}`}),
    //   // 'Content-Type': 'application/json',
    // },
  });
};
