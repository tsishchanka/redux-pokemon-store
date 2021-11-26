import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import styles from "./styles.module.scss";
import EmptyCardPageLayout from "../../../EmptyCartPage/components/EmptyCartPageLayout";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routeNames";

const CartPageLayout = ({
  itemsList,
  totalPrice,
  handleGoToDetails,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleDeleteProductFromCart,
  handleSubmit,
}) => {
  return (
    <div>
      {itemsList.length > 0 ? (
        <div className={styles.orderWrapper}>
          <h1>Shopping cart</h1>
          <Link to={ROUTES.PRODUCTS_PAGE}>
            <button className={styles.btnGo}>Go Shopping</button>
          </Link>
          <TableContainer className={styles.orderContainer} component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Total Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemsList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="left">
                      <img
                        src={item.image}
                        onClick={() => handleGoToDetails(item.id)}
                      />{" "}
                      {item.name}
                    </TableCell>
                    <TableCell align="center">
                      <button onClick={() => handleQuantityIncrement(item)}>
                        +
                      </button>
                      <span> {item.quantity} </span>
                      <button onClick={() => handleQuantityDecrement(item)}>
                        -
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      {item.quantity * item.price} $
                    </TableCell>
                    <div>
                      <button
                        onClick={() => handleDeleteProductFromCart(item.id)}
                      >
                        x
                      </button>
                    </div>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="right">{totalPrice} $</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <button className={styles.btnGo} onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      ) : (
        <EmptyCardPageLayout />
      )}
    </div>
  );
};

export default CartPageLayout;
