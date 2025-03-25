import { EntityState } from "@reduxjs/toolkit";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type NormalizedProducts = EntityState<TProduct, TProduct["id"]>;
