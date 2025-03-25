import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { TProduct } from "@/entities/products";

import { CartStore } from "../model/types.ts";
import { cartStorageManager } from "../lib/cartStorageManager.ts";

type ShoppingCartContext = {
  cartStore: CartStore;
  addToCart: (productId: TProduct["id"]) => void;
  removeFromCart: (productId: TProduct["id"]) => void;
  cartItemsCount: number;
};

export const CartContext = createContext<ShoppingCartContext | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartStore, setCartItems] = useState<CartStore>(cartStorageManager.getData() ?? {});

  const addToCart = useCallback((newProductId: TProduct["id"]) => {
    setCartItems((prevCartStore) => {
      const isItemAlreadyInCart = prevCartStore[newProductId];

      if (!isItemAlreadyInCart) {
        return { ...prevCartStore, [newProductId]: 1 };
      }

      return Object.entries(prevCartStore).reduce((newCartStore, [productId, count]) => {
        if (Number(productId) === newProductId) {
          newCartStore[Number(productId)] = count + 1;
        } else {
          newCartStore[Number(productId)] = count;
        }

        return newCartStore;
      }, {} as CartStore);
    });
  }, []);

  const removeFromCart = useCallback((productIdForRemoving: TProduct["id"]) => {
    setCartItems((prevCartStore) => {
      const removingProductCount = prevCartStore[productIdForRemoving];

      if (!removingProductCount) return prevCartStore;

      if (removingProductCount > 1) {
        return Object.entries(prevCartStore).reduce((newCartStore, [productId, count]) => {
          if (Number(productId) === productIdForRemoving) {
            newCartStore[Number(productId)] = count - 1;
          } else {
            newCartStore[Number(productId)] = count;
          }

          return newCartStore;
        }, {} as CartStore);
      }

      return Object.entries(prevCartStore).reduce((newCartStore, [productId, count]) => {
        if (Number(productId) !== productIdForRemoving) {
          newCartStore[Number(productId)] = count;
        }

        return newCartStore;
      }, {} as CartStore);
    });
  }, []);

  const cartItemsCount = useMemo(() => {
    return Object.values(cartStore).reduce((totalProductCount, productCount) => {
      return (totalProductCount += productCount);
    }, 0);
  }, [cartStore]);

  useEffect(() => {
    cartStorageManager.setData(cartStore);
  }, [cartStore]);

  return (
    <CartContext.Provider
      value={{
        cartStore,
        addToCart,
        removeFromCart,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
