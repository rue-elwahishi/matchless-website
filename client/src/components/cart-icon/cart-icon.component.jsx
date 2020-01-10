import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/cart";

import { selectCartItemsCount } from "../../selectors/cart";

import { ReactComponent as ShopppingIcon } from "./../../assets/shopping-bag.svg.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div onClick={toggleCartHidden} className="cart-icon">
    <ShopppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
// const mapDispatchProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
