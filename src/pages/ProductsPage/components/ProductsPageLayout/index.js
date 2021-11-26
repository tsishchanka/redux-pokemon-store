import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import styles from "./styles.module.scss";
import ProductCard from "../../../../CommonComponents/ProductCard";
import CustomPagination from "../../../../CommonComponents/CustomPagination";
import List from "../../../../CommonComponents/List";

const ProductsPageLayout = ({
  itemsList,
  quantity,
  isAdded,
  isLoading,
  list,
  handleGoToDetails,
  currentPage,
  handlePageChange,
  handleAddProductToCart,
  handleDeleteProductFromCart,
}) => {
  return (
    <div className={styles.container}>
      <h1>Catalog</h1>
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          /*list.map()*/ <div className={styles.cardsArea}>
            {list.map((product) => {
              const isItemInTheCart =
                itemsList.findIndex((item) => item.id === product.id) !== -1;

              return (
                <div key={product.id}>
                  <ProductCard
                    itemsList={itemsList}
                    list={list}
                    quantity={quantity}
                    isAdded={isItemInTheCart}
                    name={product.name}
                    image={product.image}
                    price={`${product.price} $`}
                    handleClick={() => handleGoToDetails(product.name)}
                    handleAddProductToCart={() =>
                      handleAddProductToCart(product)
                    }
                    handleDeleteProductFromCart={() =>
                      handleDeleteProductFromCart(product.id)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <CustomPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageCount={10}
      />
    </div>
  );
};

/*ProductsPageLayout.propTypes = {
productsList: PropTypes.arrayOf(
PropTypes.shape({
name: PropTypes.string.isRequired,
// price: PropTypes.number.isRequired,
})
),
};*/
export default ProductsPageLayout;
