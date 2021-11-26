import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "./styles.module.scss";
import AccountPageLayout from "../../../AccountPage/components/AccountPageLayout";

const OrderPageLayout = ({
  itemsOrderList,
  totalPrice,
  isOrderCreated,
  itemsList,
  isLoading,
  handleGoToDetails,
  handleSubmit,
}) => {
  return (
    <div>
      {itemsList.length === 0 ? (
        <AccountPageLayout />
      ) : (
        <div className={styles.orderWrapper}>
          <h1>Order confirmation</h1>
          <TableContainer
            className={styles.orderContainer}
            sx={{ maxWidth: 650 }}
            component={Paper}
          >
            <Table
              sx={{ maxWidth: 650 }}
              size="small"
              /*aria-label="a dense table"*/
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Product</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemsList.map((item) => (
                  <TableRow
                    key={item.id}
                    /* sx={{ "&:last-child td, &:last-child th": { border: 0 } }}*/
                  >
                    <TableCell align="right">
                      {" "}
                      <img src={item.image} alt="" />
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
            <Table
              sx={{ maxWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Total sum
                  </TableCell>
                  <TableCell align="right">{totalPrice}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant="contained" onClick={handleSubmit}>
            Confirm your order
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderPageLayout;
