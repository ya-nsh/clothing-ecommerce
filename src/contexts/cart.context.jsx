import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // FIND IF ITEM IS ALREADY IN CART
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  // IF ITEM IS ALREADY IN CART
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // IF ITEM IS NOT IN CART
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
