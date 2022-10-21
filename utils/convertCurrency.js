export const convertCurrency = (money) => {
  const config = {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 9,
  };
  return new Intl.NumberFormat('vi-VN', config).format(money);
};

export const multiCurrency = (money, currency) => {
  const config = {
    style: 'currency',
    currency: currency.unit,
    maximumFractionDigits: 9,
  };
  return new Intl.NumberFormat(currency.type, config).format(money);
};
