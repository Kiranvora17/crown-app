import style from "./cart-item.module.scss";

const CartItem = ({ imageUrl, name, price, count }) => {
  return (
    <div className={style.cartItemContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={style.itemDetails}>
        <span className={style.name}>{name}</span>
        <span>
          $ {price} X {count}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
