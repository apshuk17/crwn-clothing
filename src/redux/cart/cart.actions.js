import { CartActionType } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => ({
  type: CartActionType.ADD_ITEM,
  payload: item
});
