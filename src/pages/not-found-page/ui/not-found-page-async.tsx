import { lazy } from "react";

export const NotFoundPageAsync = lazy(() =>
  import("./not-found-page.tsx").then(({ NotFoundPage }) => ({ default: NotFoundPage })),
);
