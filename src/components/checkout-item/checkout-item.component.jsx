import { useContext } from "react";
import style from "./checkout-item.module.scss";
import { cartContext } from "../../contexts/cart.context";

const CheckoutItem = (product) => {
  const { imageUrl, name, price, count } = product;

  const { changeProductQuantity, removeProductFromCart } =
    useContext(cartContext);

  const addToCart = () => changeProductQuantity(product, 1);
  const reduceItemInCart = () => changeProductQuantity(product, -1);
  const removeItemFromCart = () => removeProductFromCart(product);

  return (
    <div className={style.checkoutItemContainer}>
      <div className={style.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={style.name}>{name}</span>
      <div className={style.quantity}>
        <span className={style.arrow} onClick={reduceItemInCart}>
          &#10094;
        </span>
        <span className={style.value}>{count}</span>
        <span className={style.arrow} onClick={addToCart}>
          &#10095;
        </span>
      </div>
      <span className={style.price}>{price}</span>
      <span className={style.removeButton} onClick={removeItemFromCart}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
