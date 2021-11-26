import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import styles from "./styles.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useLogOut } from "../../hooks";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cart);
  const handleLogOut = useLogOut();

  return (
    <div className={styles.wrapper}>
      {isAuth ? (
        <div className={styles.navWrapper}>
          <Link to={ROUTES.PRODUCTS_PAGE}>
            <button className={styles.navButton}>Catalog</button>
          </Link>

          <Link to={ROUTES.ORDER_PAGE}>
            <IconButton aria-label="cart">
              <StyledBadge color="secondary">
                <AccountCircleOutlinedIcon />
              </StyledBadge>
            </IconButton>
          </Link>
          <Link to={ROUTES.CART_PAGE}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      ) : (
        <div>
          <Link to={ROUTES.REGISTRATION_PAGE}>
            <button className={styles.navButton}>Sign Up</button>
          </Link>
          <Link to={ROUTES.AUTHORIZATION_PAGE}>
            <button className={styles.navButton}> Sign In</button>
          </Link>
        </div>
      )}
      {isAuth && (
        <IconButton aria-label="cart" onClick={handleLogOut}>
          <StyledBadge color="secondary">
            <ExitToAppIcon />
          </StyledBadge>
        </IconButton>
      )}
    </div>
  );
};

export default Header;
