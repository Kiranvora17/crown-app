import { useContext } from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import style from "./cart-icon.module.scss";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggleCart, totalItems } = useContext(cartContext);

  const toggleCartDropdown = () => {
    toggleCart();
  };

  return (
    <div className={style.cartIconContainerClass} onClick={toggleCartDropdown}>
      <ShoppingBag className={style.shoppingIconClass} />
      <span className={style.itemCountClass}>{totalItems}</span>
    </div>
  );
};

export default CartIcon;
