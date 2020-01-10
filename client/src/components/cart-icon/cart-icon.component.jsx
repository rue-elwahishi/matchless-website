import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/cart";

import { ReactComponent as ShopppingIcon } from "./../../assets/shopping-bag.svg.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div onClick={toggleCartHidden} className="cart-icon">
    <ShopppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

// const mapDispatchProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

export default connect(null, { toggleCartHidden })(CartIcon);
