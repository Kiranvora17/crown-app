import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { cartContext } from "../../contexts/cart.context";

import style from "./navigation.module.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { isCartOpen } = useContext(cartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className={style.navigation}>
        <Link className={style.logoContainer} to="/">
          <Logo className={style.logo} />
        </Link>
        <div className={style.navLinksContainer}>
          <Link className={style.navLink} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className={style.navLink} onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className={style.navLink} to="/auth">
              SIGN IN
            </Link>
          )}
          <div className={style.navLink}>
            <CartIcon />
          </div>
        </div>
      </div>
      {isCartOpen ? <CartDropdown /> : ""}
      <Outlet />
    </>
  );
};

export default Navigation;
