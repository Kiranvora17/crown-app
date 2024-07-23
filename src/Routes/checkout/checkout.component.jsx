import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import style from "./checkout.module.scss";

const Checkout = () => {
  const { cartProducts } = useContext(cartContext);
  const total = cartProducts.reduce(
    (total, product) => total + product.count * product.price,
    0
  );

  return (
    <div className={style.checkoutContainer}>
      <div className={style.checkoutHeader}>
        <span className={style.headerBlock}>Product</span>
        <span className={style.headerBlock}>Description</span>
        <span className={style.headerBlock}>Quantity</span>
        <span className={style.headerBlock}>Price</span>
        <span className={style.headerBlock}>Remove</span>
      </div>

      {cartProducts.map((product) => {
        return <CheckoutItem key={product.id} {...product} />;
      })}

      <span className={style.total}>Total: $ {total}</span>
    </div>
  );
};

export default Checkout;
