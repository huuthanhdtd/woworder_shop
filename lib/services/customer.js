// import axios from 'axios';
import axiosApi from './axiosApi';
// const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores`;
// const url = `${process.env.NEXT_PUBLIC_WOWORDER_LOCAL}/api/stores`;

export const customer = async (token, id) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/json',
      },
    };
    const res = await (await axiosApi().get(`/customers/${id}`, options)).data;
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
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await (
      await axiosApi().post(
        `/709313694365910020/checkout`,
        checkoutInfor,
        options
      )
    ).data;

    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};

export const createAddress = async (addressInfor, token, customerId) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await (
      await axiosApi().post(`/${customerId}/addresses`, addressInfor, options)
    ).data;
    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};

export const updateAddress = async (addressInfor, token, customerId) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const { data, id } = addressInfor;
    const res = await (
      await axiosApi().patch(`/${customerId}/addresses/${id}`, data, options)
    ).data;
    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};

export const deleteAddress = async (id, token, customerId) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await (
      await axiosApi().delete(`/${customerId}/addresses/${id}`, options)
    ).data;
    return res;
  } catch (error) {
    return {
      status: error.response.data.code,
      error: error.response.data.message,
    };
  }
};
