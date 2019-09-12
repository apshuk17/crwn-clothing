export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExistingCartItem = cartItems.some(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (isExistingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
