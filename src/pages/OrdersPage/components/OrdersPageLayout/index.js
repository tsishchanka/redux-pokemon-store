import React from "react";
import styles from "../../../CartPage/components/CartPageLayout/styles.module.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersPageLayout = ({
  list,
  handleGoToDetails,
  totalPrice,
  itemsList,
}) => {
  return (
    <div>
      <h1>OrderS Page</h1>
      <TableContainer className={styles.orderContainer} component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total Sum</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {ordersList.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">
                  <img
                    src={item.image}
                    onClick={() => handleGoToDetails(item.id)}
                  />{" "}
                  {item.name}
                </TableCell>
                <TableCell align="center">
                  +<span> {item.quantity} </span>-<div>DELETE</div>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="center">Total</TableCell>
              <TableCell align="right">{totalPrice} $</TableCell>
            </TableRow>
          </TableBody>*/}
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersPageLayout;
