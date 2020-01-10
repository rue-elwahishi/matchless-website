import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../actions/types";

// export const toggleCartHidden = () => ({
//   type: TOGGLE_CART_HIDDEN
// });

export const toggleCartHidden = () => dispatch => {
  dispatch({
    type: TOGGLE_CART_HIDDEN
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  })
}