export enum AppRoutes {
  MAIN = "main",
  CART = "cart",
  NOT_FOUND = "not_found",
}

type TRoutePath = Record<AppRoutes, string> & {
  getPath: <T extends Record<string, string | number>>(
    route: AppRoutes,
    params?: T | undefined,
  ) => string;
};

export const RoutePath: TRoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.NOT_FOUND]: "*",

  getPath: (route, params) => {
    return RoutePath[route].replace(/:([a-zA-Z]+)/g, (_, key) => String(params ? params[key] : ""));
  },
};
