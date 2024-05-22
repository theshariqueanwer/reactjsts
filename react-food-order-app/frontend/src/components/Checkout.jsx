import React, { useContext } from "react";
import Modal from "./ui/Modal";
import CartContext from "../store/context/CartContext";
import Button from "./ui/Button";
import UserProgressContext from "../store/context/UserProgressContext";
import Input from "./ui/Input";
import useHttp from "./hooks/useHttp";
import Error from "./Error";

const requestConfigObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify({
  //   order: {
  //     items: cartCtx.items,
  //     customer: customerData,
  //   },
  // }),
};

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    loading: sending,
    error,
    data,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfigObject);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handlePlaceOrder() {}

  function onHandleSubmitCartCheckoutForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartCtx.items,
    //       customer: customerData,
    //     },
    //   }),
    // });
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleCloseCheckout}>
        Close Checkout
      </Button>
      <Button onClick={handlePlaceOrder}>Submit Order</Button>
    </>
  );

  if (sending) {
    actions = <span>sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        // onClose={handleCloseCheckout}
        onClose={handleFinish}
      >
        <h2>Your Order Placed Success</h2>
        {/* <p>Your order has been placed successfully</p> */}
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          {/* <Button onClick={handleCloseCheckout}>Okay</Button> */}
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={
        userProgressCtx.progress === "checkout" ? handleCloseCheckout : null
      }
    >
      <form action="" onSubmit={onHandleSubmitCartCheckoutForm}>
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotal}</p>

        <Input
          label="Full Name"
          type="text"
          id="name"
          placeholder="Enter Your Full Name"
        />
        <Input
          label="Email Id"
          type="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <Input
          label="Street"
          type="text"
          id="street"
          placeholder="Enter Your Street"
        />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            placeholder="Enter Your Postal Code"
          />
          <Input
            label="City"
            type="text"
            id="city"
            placeholder="Enter Your City"
          />
        </div>

        {error && <Error title="Failed to place the order" message={error} />}

        <p className="modal-actions">
          {/* <Button type="button" textOnly onClick={handleCloseCheckout}>
            Close Checkout
          </Button>
          <Button onClick={handlePlaceOrder}>Submit Order</Button> */}

          {actions}
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
