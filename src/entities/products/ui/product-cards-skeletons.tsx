import { ProductCardSkeleton } from "./product-card-skeleton.tsx";

const skeletonData = new Array(10)
  .fill(0)
  .map((item, index) => `product-card-skeleton-${item + index}`);

export const ProductCardsSkeletons = () => {
  return skeletonData.map((item) => <ProductCardSkeleton key={item} />);
};
