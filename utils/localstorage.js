import React, { useEffect } from 'react';

const key = 'viewed-products';

export const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const nextLocalStorage = () => {
  if (isBrowser()) {
    return window.localStorage;
  }
};

export const setProductViewed = () => {
  const data = nextLocalStorage()?.getItem('viewed-products');
  if (data !== null) {
    nextLocalStorage()?.setItem('viewed-products', data);
    return;
  }
  nextLocalStorage()?.setItem('viewed-products', JSON.stringify({ items: [] }));
};

export const addProduct = (product) => {
  const response = nextLocalStorage().getItem(key);
  const { items } = JSON.parse(response);
  let newProducts = [];
  let length = items?.length;
  items.slice(length > 14 ? length - 14 : 0, length).filter((it) => {
    if (it.id !== product.id) {
      newProducts.push(it);
    }
  });
  const result = newProducts.concat(product);
  nextLocalStorage().setItem(key, JSON.stringify({ items: result }));
};

export const getProducts = () => {
  const data = nextLocalStorage()?.getItem(key);
  if (typeof data !== 'undefined') {
    const { items } = JSON.parse(data);
    return items;
  }
};

export const getUserData = (key) => {
  const data = nextLocalStorage()?.getItem(key);
  if (typeof data !== 'undefined') {
    const items = JSON.parse(data);
    return items;
  }
};
