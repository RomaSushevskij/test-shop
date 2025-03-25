export const formatToCurrency = (amount: number, currency: string): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
  }).format(amount);
};
