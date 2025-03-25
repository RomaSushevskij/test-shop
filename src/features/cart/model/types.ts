import { TProduct } from "@/entities/products";

export type CartStore = Record<TProduct["id"], number>;
