import { createEntityAdapter } from "@reduxjs/toolkit";

import { api } from "@/shared/api/api.ts";

import { NormalizedProducts, TProduct } from "../model/types";

const sitesEntityAdapter = createEntityAdapter<TProduct, TProduct["id"]>({
  selectId: (site) => site.id,
});

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    products: build.query<NormalizedProducts, void>({
      query: () => ({
        url: "/products",
      }),
      transformResponse(baseQueryReturnValue: TProduct[]) {
        const state = sitesEntityAdapter.getInitialState();

        return sitesEntityAdapter.setAll(state, baseQueryReturnValue);
      },
    }),
  }),
});

export const { useProductsQuery, util: testsUtil } = productsApi;
