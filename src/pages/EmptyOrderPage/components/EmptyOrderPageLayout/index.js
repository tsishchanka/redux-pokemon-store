import React from "react";
import { Button } from "@mui/material";
import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";

const EmptyOrderPageLayout = ({ handleGoToPage }) => {
  return (
    <div>
      <h1>Your order has been successfully created.</h1>
      <Link to={ROUTES.PRODUCTS_PAGE}>
        <Button variant="contained">Start Shopping</Button>
      </Link>
    </div>
  );
};

export default EmptyOrderPageLayout;
