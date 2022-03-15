import React from "react";
import styles from "./styles.module.scss";
import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";


const EmptyCardPageLayout = () => {
  return (
    <div>
      <h1>You don't have any items in your cart.</h1>
      <Link to={ROUTES.PRODUCTS_PAGE}>
        <button className={styles.btnGo}>Start Shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCardPageLayout;
