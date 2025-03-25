import { LocalStorageManager } from "@/shared/lib/localStorageManager.ts";

import { CartStore } from "../model/types.ts";

const TEST_SHOP_CART_STORE = "test_shop_cart_store";

export const cartStorageManager = new LocalStorageManager<CartStore>(TEST_SHOP_CART_STORE);
