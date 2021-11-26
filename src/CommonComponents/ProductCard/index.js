import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import styles from "./styles.module.scss";

const ProductCard = ({
  name,
  image,
  price,
  handleClick,
  isAdded,
  handleAddProductToCart,
  handleDeleteProductFromCart,
}) => {
  return (
    <Card className={styles.defaultCard} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} width="10vw%" image={image} />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" children={name} component="h1" />
        {price}
        <Typography variant="body2" color="textSecondary" component="h3" />
      </CardContent>
      <CardActions>
        {!isAdded ? (
          <Button size="small" onClick={handleAddProductToCart}>
            Add
          </Button>
        ) : (
          <Button size="small" onClick={handleDeleteProductFromCart}>
            Delete
          </Button>
        )}
        <Button onClick={handleClick} size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
