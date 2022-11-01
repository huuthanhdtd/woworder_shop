export const reduceHomeProducts = (categoriesData, brandsData) => {
  return categoriesData?.reduce((result, curr) => {
    if (curr.products.length > 0) {
      const newItem = curr.products.map((pro) => {
        const brandName = brandsData.find((br) => br.id === pro.brandId);
        return { ...pro, brandName: brandName.name };
      });
      result = [...result, { ...curr, products: newItem }];
      return result;
    } else {
      return (result = [...result, curr]);
    }
  }, []);
};
