import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  CircularProgress,
} from "@mui/material";
import moment from "moment";
import styles from "./styles.module.scss";
import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";

const AccountPageLayout = ({ info, list, quantity, isLoading }) => {
  return (
    <div maxWidth="70vw">
      <h1>My account</h1>
      <p>Welcome, {info.firstName}, to your account.</p>{" "}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Name:
                  </TableCell>
                  <TableCell align="left">{info.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Last Name:
                  </TableCell>
                  <TableCell align="left">{info.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Gender:
                  </TableCell>
                  <TableCell align="left">{info.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    E-mail:
                  </TableCell>
                  <TableCell align="left">{info.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Phone:
                  </TableCell>
                  <TableCell align="left">{info.phone}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box gridColumn="span 4">
          <h2>My Cart</h2>
          <div>Items: {quantity}</div>

          <Link to={ROUTES.CART_PAGE}>
            <button className={styles.btnGo}>Go to Cart</button>
          </Link>
        </Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box gridColumn="span 12">
            <h2>My Orders</h2>
            {list?.map((order, index) => (
              <div key={order._id}>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell align="right">
                          <strong>Total quantity:</strong>{" "}
                          {order.itemsList.length} pcs
                        </TableCell>
                        <TableCell align="right">
                          <strong>Total paid:</strong> {order.totalPrice} $
                        </TableCell>
                        <TableCell align="right">
                          <strong>Date of order:</strong>{" "}
                          {moment(order.createdAt).format("MMM Do YY, h:mm a")}
                        </TableCell>
                      </TableRow>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>

                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.itemsList?.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              <img src={item.image} /> {item.name}
                            </TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default AccountPageLayout;
