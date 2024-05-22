import React, { useContext } from "react";
import Modal from "./ui/Modal";
import CartContext from "../store/context/CartContext";
import Button from "./ui/Button";
import UserProgressContext from "../store/context/UserProgressContext";
import Input from "./ui/Input";

function CartCheckout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCartCheckoutClose() {
    userProgressCtx.hideCheckout();
  }

  function handleCheckoutCartPlace() {}

  return (
    <Modal
      open={userProgressCtx.progress === "checkout-cart"}
      onClose={
        userProgressCtx.progress === "checkout-cart"
          ? handleCartCheckoutClose
          : null
      }
    >
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotal}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email Id" type="email" id="email-id" />
        {/* <Input label="Phone Number" type="text" id="phone-number" />
        <Input label="Apartment No" type="text" id="apartment-no" />
        <Input label="Apartment Name" type="text" id="apartment-name" />
        <Input label="Address" type="text" id="address" /> */}
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          {/* <Input label="Pin Code/Zip Code/Postal Code" type="text" id="pin-code-zip-code-postal-code" /> */}
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
          {/* <Input label="State" type="text" id="state" />
          <Input label="Country" type="text" id="country" /> */}
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCartCheckoutClose}>
            Close
          </Button>
          <Button onClick={handleCheckoutCartPlace}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default CartCheckout;
