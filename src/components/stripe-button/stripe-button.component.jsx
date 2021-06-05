import React from "react";
import StripeCheckout from "react-stripe-checkout";
function Stripecheckoutbutton({ price }) {
  const priceforstripe = price * 100;
  const publishablekey =
    "pk_test_51IyvHDSIeclG3n8Whp5fKdMHaBko5KvN2ZcB5zXzAPNNkATWE4tFGQCZjpkGmSUapxxbFm6c17sWXNPsD51jP1gq006jAo3RlR";
  const onToken = (token) => {
    console.log(token);
    alert("payment done");
  };
  return (
    <StripeCheckout
      name="ck clothing "
      description={`ck clothing payment total is $${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      label="Pay Now"
      billingAddress
      shippingAddress
      amout={priceforstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
}

export default Stripecheckoutbutton;
