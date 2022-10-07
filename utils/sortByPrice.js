export const sortByPrice = (data, type) => {
  if (type === 'ascending') {
    return data?.sort((a, b) => {
      return Number(b.sellPrice) - Number(a.sellPrice);
    });
  } else if (type === 'decrease') {
    return data?.sort((a, b) => {
      return Number(a.sellPrice) - Number(b.sellPrice);
    });
  }
};
