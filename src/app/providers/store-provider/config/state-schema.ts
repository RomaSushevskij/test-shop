import { api } from "@/shared/api/api.ts";

export type StateSchema = {
  [api.reducerPath]: ReturnType<typeof api.reducer>;
};
