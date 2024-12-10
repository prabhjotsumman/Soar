export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
