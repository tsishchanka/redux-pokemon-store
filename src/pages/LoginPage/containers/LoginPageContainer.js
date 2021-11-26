import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginPageLayout from "../components/LoginPageLayout";

import { useForm } from "../../../hooks";
import { LOG_IN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isAuth, errors } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOG_IN_REQUEST(formData));
    },

    //added dispatch
    [dispatch, formData]
  );

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.PRODUCTS_PAGE);
    }
  }, [isAuth]);

  return (
    <LoginPageLayout
      error={errors}
      loginValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPageContainer;
