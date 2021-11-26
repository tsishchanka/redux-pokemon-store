import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import styles from "./styles.module.scss";

function ExpandMoreIcon() {
  return null;
}

const ProductDetailedPageLayout = ({
  isLoading,
  handleAddProductToCart,
  handleDeleteProductFromCart,
  isAdded,
  info,
  addPokemonToCart,
}) => {
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className={styles.productCard}>
                <h1>Product Card</h1>
                <h2>{info.name}</h2>
                <div>
                  <img
                    className={styles.productImg}
                    src={info.image}
                    alt={info.image}
                  />
                </div>

                <p>price {info.price} $</p>

                {!isAdded ? (
                  <Button
                    variant="outlined"
                    onClick={() => handleAddProductToCart(addPokemonToCart)}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteProductFromCart(info.id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </Grid>
            <Grid item xs={6}>
              <h3>Abilities</h3>
              <div>
                {info.abilities?.map((ability) => (
                  <Accordion key={ability.title}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <h3>{ability.title}</h3>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{ability.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default ProductDetailedPageLayout;
