import axios from 'axios';
const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`;
const urlLocal = `${process.env.NEXT_PUBLIC_WOWORDER_LOCAL}/api/stores`;

export const customer = async (token, id) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const Id = '709509416277247213';
    const res = await (await axios.get(`${url}/customers/${Id}`, headers)).data;
    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};

export const checkouts = async (checkoutInfor, token, shopId) => {
  try {
    const { products } = checkoutInfor;
    delete checkoutInfor.products;

    const formData = Object.keys(checkoutInfor).reduce((result, key) => {
      result.append(key, checkoutInfor[key]);

      return result;
    }, new FormData());

    formData.append('products', JSON.stringify(products));

    const Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg3NDY5MjUsImN1c3RvbWVySWQiOiI3MDk1MDk0MTYyNzcyNDcyMTMiLCJpYXQiOjE2NjYxNTQ5MjV9.a_Xm3u7g0vKfECwk_GfaYJ0_R9tgRfzf256Q7vfwIzc';
    const headers = {
      headers: {
        Authorization: `Bearer ${Token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await (
      await axios.post(
        `${urlLocal}/709313694365910020/checkout`,
        formData,
        headers
      )
    ).data;

    console.log(res);
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};
