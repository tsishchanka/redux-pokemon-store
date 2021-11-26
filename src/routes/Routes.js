import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";

import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailedPageContainer from "../pages/ProductDetailedPage/containers/ProductDetailedPageContainer";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";
import AccountPageContainer from "../pages/AccountPage/containers/AccountPageContainer";

const Routes = () => {
  return (
    <div>
      <Switch>
        {/* <PrivateRoute exact path={ROUTES.HOME} component={HomePageContainer} />*/}
        <Route
          exact
          path={ROUTES.AUTHORIZATION_PAGE}
          component={LoginPageContainer}
        />
        <PrivateRoute
          exact
          path={ROUTES.PRODUCTS_PAGE}
          component={ProductsPageContainer}
        />
        <PrivateRoute
          exact
          path={ROUTES.PRODUCT_DETAILED_PAGE}
          component={ProductDetailedPageContainer}
        />
        <Route
          path={ROUTES.REGISTRATION_PAGE}
          component={RegistrationPageContainer}
        />
        <PrivateRoute path={ROUTES.CART_PAGE} component={CartPageContainer} />
        <PrivateRoute
          path={ROUTES.ORDER_PAGE}
          component={AccountPageContainer}
        />
        <Redirect path="*" to={ROUTES.PRODUCTS_PAGE} />
      </Switch>
    </div>
  );
};

export default Routes;
