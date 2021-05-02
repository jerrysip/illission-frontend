import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Payment() {
  const [product] = React.useState({
    name: "The Weekly Edition",
    price: 39.99,
    description: "Cool car",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://theillissionproject.herokuapp.com//payment",
      {
        token,
        product,
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="process.env.STRIPE_PUBLIC_KEY"
        token={handleToken}
        amount={product.price * 100}
        name="The Weekly Edition"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Payment;
