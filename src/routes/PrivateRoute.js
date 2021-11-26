import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "./routeNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          <Redirect to={ROUTES.AUTHORIZATION_PAGE} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
