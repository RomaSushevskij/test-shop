import { cartStorageManager } from "../../lib/cartStorageManager.ts";
import { CartItemSkeleton } from "./cart-item-skeleton.tsx";

const defineCartProductsCount = () => {
  const cartStore = cartStorageManager.getData();

  if (!cartStore) return 0;

  return Object.values(cartStore).length;
};

const cartItemsSkeletonsData = new Array(defineCartProductsCount())
  .fill(0)
  .map((item, index) => `cart-item-skeleton-${item + index}`);

export const CartItemsSkeletons = () => {
  return cartItemsSkeletonsData.map((item, index, array) => (
    <CartItemSkeleton key={item} displayDivider={index !== array.length - 1} />
  ));
};
