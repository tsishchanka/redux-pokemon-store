import React, { useCallback } from "react";
import EmptyCardPageLayout from "../components/EmptyOrderPageLayout";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../routes/routeNames";

const EmptyCartPageContainer = () => {
  const history = useHistory();
  const handleGoToPage = useCallback(() => {
    history.push(ROUTES.PRODUCTS_PAGE);
  }, [history]);
  return <EmptyCardPageLayout handleGoToPage={handleGoToPage} />;
};

export default EmptyCartPageContainer;
