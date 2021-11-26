import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegistrationPageLayout from "../components/RegistrationPageLayout";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../hooks";
import { SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { error, isRegistered } = useSelector((state) => state.signup);

  const [formData, handleFormFieldChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const newUser = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender.toLowerCase(),
        password: formData.password,
        phone: formData.phone,
      };
      if (formData.password === formData.passwordConfirmation) {
        dispatch(SIGN_UP_REQUEST(newUser));
      }
    },
    [dispatch, formData]
  );

  useLayoutEffect(() => {
    if (isRegistered) {
      history.push(ROUTES.AUTHORIZATION_PAGE);
    }
  }, [isRegistered]);

  return (
    <RegistrationPageLayout
      isRegistered={isRegistered}
      signUpData={formData}
      onChange={handleFormFieldChange}
      onSubmit={handleSubmit}
      error={error}
    />
  );
};

export default RegistrationPageContainer;
