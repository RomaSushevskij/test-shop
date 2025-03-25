import { Provider } from "react-redux";
import { type ReactElement } from "react";

import { createReduxStore } from "../config/store.ts";
import { StateSchema } from "../config/state-schema.ts";

interface StoreProviderProps {
  children?: ReactElement;
  initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
