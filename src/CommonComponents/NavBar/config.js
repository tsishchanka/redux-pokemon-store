import { ROUTES } from "../../routes/routeNames";

export const NAV_TYPE_NAMES = {
  PUBLIC: "public",
  PRIVATE: "private",
};

export const NAV_CONFIG = {
  [NAV_TYPE_NAMES.PUBLIC]: [
    {
      label: "Sign In",
      path: ROUTES.AUTHORIZATION_PAGE,
    },
    {
      label: "Sigh Up",
      path: ROUTES.REGISTRATION_PAGE,
    },
  ],
  [NAV_TYPE_NAMES.PRIVATE]: [
    /*    {
          label: "Home",
          path: ROUTES.HOME,
        },*/
    /* {
       label: "Sign In",
       path: ROUTES.AUTHORIZATION_PAGE,
     },*/

    {
      label: "Products",
      path: ROUTES.PRODUCTS_PAGE,
    },
    {
      label: "Cart",
      path: ROUTES.CART_PAGE,
    },
    {
      label: "Account",
      path: ROUTES.ORDER_PAGE,
    },
  ],
};
