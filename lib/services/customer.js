import axios from 'axios';
const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`;

export const customer = async ({ token }) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await (
      await axios.get(`${url}/customers/709509416277247213`, headers)
    ).data;
    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};
