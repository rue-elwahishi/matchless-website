import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button.component";
import { addItem } from "../../actions/cart";
import "./result-Card.scss";

const ResultCard = ({ result, addItem }) => {
  const { name, price, imageUrl } = result;
  console.log(imageUrl, "image");
  return (
    <div className="result-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl[0]})` }}
      />

      <div className="result-footer">
        <span className="name">{name}</span>
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
