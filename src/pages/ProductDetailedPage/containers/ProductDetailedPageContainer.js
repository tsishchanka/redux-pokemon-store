import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_DETAILS_REQUEST } from "../actions";
import { useEffect } from "react";
import { useCart } from "../../../hooks";
import ProductDetailedPageLayout from "../component/ProductDetailedPageLayout";

const ProductDetailedPageContainer = () => {
  const dispatch = useDispatch();
  const { info, isLoading } = useSelector((state) => state.productDetails);
  const { itemsList } = useSelector((state) => state.cart);

  const { name } = useParams();
  useEffect(() => {
    dispatch(GET_PRODUCT_DETAILS_REQUEST(name));
  }, [dispatch, name]);
  const {
    handleAddProductToCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
    handleDeleteProductFromCart,
  } = useCart();
  const addPokemonToCart = {
    id: info.id,
    name: info.name,
    image: info.image,
    price: info.price,
  };
  const isAdded = itemsList.findIndex((item) => item.id === info.id) !== -1;

  return (
    <ProductDetailedPageLayout
      isAdded={isAdded}
      itemsList={itemsList}
      isLoading={isLoading}
      handleQuantityIncrement={handleQuantityIncrement}
      handleAddProductToCart={handleAddProductToCart}
      handleQuantityDecrement={handleQuantityDecrement}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      info={info}
      addPokemonToCart={addPokemonToCart}
    />
  );
};
export default ProductDetailedPageContainer;
