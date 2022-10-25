export const spliceBrandId = (arrBrand) => {
  return arrBrand.reduce((str, id, idx) => {
    if (idx > 1) {
      if (str !== '') {
        return `${str},${id}`;
      } else {
        return `${id}`;
      }
    }
    return str;
  }, ``);
};
