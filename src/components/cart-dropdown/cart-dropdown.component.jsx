import { useContext } from "react";
import Button from "../button/button.component";
import { cartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

import style from "./cart-dropdown.module.scss";

const CartDropdown = () => {
  const { cartProducts } = useContext(cartContext);

  return (
    <div className={style.cartDropdownContainer}>
      <div className={style.cartItems}>
        {cartProducts.map((product) => {
          return <CartItem key={product.id} {...product} />;
        })}
      </div>
      <Button>
        <Link to="/checkout">Go to checkout</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
