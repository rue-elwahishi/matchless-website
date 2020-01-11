import React from "react";

import StripeCheckout from "react-stripe-checkout";
import pijama from "../../assets/pijama.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey = "pk_test_lMMR1Hrbrljxio3eeiVq4hbK00NqIRhyVh";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Matchless Clothing Ltd."
      billingAddress
      shippingAddress
      image={`${pijama}`}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};
export default StripeCheckoutButton;
