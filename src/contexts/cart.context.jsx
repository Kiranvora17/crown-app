import { useEffect } from "react";
import { createContext, useState } from "react";

export const cartContext = createContext({
  isCartOpen: false,
  toggleCart: () => null,
  cartProducts: [],
  changeProductQuantity: () => null,
  totalItems: 0,
  removeProductFromCart: () => null,
});

const changeProductQuantityUtil = (product, quantity, cartProducts) => {
  const prdToFind = cartProducts.find((prd) => prd.id === product.id);
  if (prdToFind) {
    if (prdToFind.count === 1 && quantity < 0) {
      return cartProducts.filter((prd) => prd.id !== product.id);
    } else {
      // quantity > 0 || quantity < 0 && count > 1
      return cartProducts.map((prd) => {
        return prd.id === product.id
          ? { ...prd, count: prd.count + quantity }
          : prd;
      });
    }
  } else {
    // add when count  = 0
    return [...cartProducts, { ...product, count: 1 }];
  }
};

const countTotalItemsUtil = (cartProducts) => {
  return cartProducts.reduce((total, prd) => prd.count + total, 0);
};

const removeProductFromCartUtil = (product, cartProducts) => {
  return cartProducts.filter((prd) => prd.id !== product.id);
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(countTotalItemsUtil(cartProducts));
  }, [cartProducts]);

  const toggleCart = () => {
    setIsCartIsOpen((lastCartState) => !lastCartState);
  };

  const changeProductQuantity = (product, quantity) => {
    setCartProducts(changeProductQuantityUtil(product, quantity, cartProducts));
  };

  const removeProductFromCart = (product) => {
    setCartProducts(removeProductFromCartUtil(product, cartProducts));
  };

  const value = {
    isCartOpen,
    toggleCart,
    cartProducts,
    changeProductQuantity,
    totalItems,
    removeProductFromCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
