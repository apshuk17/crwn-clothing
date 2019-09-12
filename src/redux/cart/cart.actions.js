import { CartActionType } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN
  };
};
