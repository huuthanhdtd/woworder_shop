export const updateAddressUser = (state, payload) => {
  const {
    included: { addresses },
  } = state;
  const existItem = addresses.find((ad) => ad.id === payload.id);
  if (existItem) {
    const newAddress = addresses.map((ad) =>
      ad.id === payload.id ? payload : ad
    );
    return {
      ...state,
      included: { ...state.included, addresses: newAddress },
    };
  }
  const newAddress = [...addresses, payload];
  return {
    ...state,
    included: { ...state.included, addresses: newAddress },
  };
};

export const deleteAddressUser = (state, payload) => {
  const {
    included: { addresses },
  } = state;
  const newAddress = addresses.filter((ad) => ad.id !== payload.id);
  return {
    ...state,
    included: { ...state.included, addresses: newAddress },
  };
};
