import { useContext } from "react";
import Button from "../button/button.component";
import { cartContext } from "../../contexts/cart.context";

import style from "./product-card.module.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { changeProductQuantity } = useContext(cartContext);

  const addToCart = () => {
    changeProductQuantity(product, 1);
  };

  return (
    <div className={style.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <Button displayType={"invert"} onClick={addToCart}>
        Add to cart
      </Button>

      <div className={style.footer}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
