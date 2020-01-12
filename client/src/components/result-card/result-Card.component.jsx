import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button.component";
import { addItem } from "../../actions/cart";
import "./result-Card.scss";

const ResultCard = ({ result, addItem }) => {
  const { title, price, image_url } = result;
  return (
    <div className="result-item">
      <div className="image" style={{ backgroundImage: `url(${image_url})` }} />

      <div className="result-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItem(result);
        }}
        inverted
      >
        ADD To Cart
      </CustomButton>
    </div>
  );
};
export default connect(null, { addItem })(ResultCard);
