export const spliceBrandId = (arrBrand) => {
  if (arrBrand.length > 0) {
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
  }
};
