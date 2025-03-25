import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { api } from "@/shared/api/api.ts";

import { StateSchema } from "./state-schema.ts";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    [api.reducerPath]: api.reducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware);
    },
  });
};
