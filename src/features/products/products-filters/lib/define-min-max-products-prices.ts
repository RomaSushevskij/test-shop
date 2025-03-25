import { TProduct } from "@/entities/products";

export const defineMinMaxProductsPrices = (products: TProduct[]) => {
  const productsSortedAscByPrice = [...products].sort((productA, productB) => {
    return productA.price - productB.price;
  });

  return {
    min: productsSortedAscByPrice[0]?.price,
    max: productsSortedAscByPrice[productsSortedAscByPrice.length - 1]?.price,
  };
};
