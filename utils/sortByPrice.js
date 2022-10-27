export const sortByPrice = (data, type) => {
  if (type === 'ascending') {
    return data?.sort((a, b) => {
      return Number(a.sellPrice) - Number(b.sellPrice);
    });
  } else if (type === 'descending') {
    return data?.sort((a, b) => {
      return Number(b.sellPrice) - Number(a.sellPrice);
    });
  } else if (type === 'createdAt') {
    return data?.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  } else if (type === 'updatedAt') {
    return data?.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }
};
