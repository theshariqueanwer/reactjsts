import React, { useContext, useState } from "react";
import Modal from "./ui/Modal";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { DELIVERYTYPE } from "../data/data";
import BuyNowOrderContext from "../store/context/BuyNowOrderContext";
import Select from "./ui/Select";

function BuyNowCheckout() {
  const [deliveryType, setDeliveryType] = useState("");
  const [buyNowCheckout, setBuyNowCheckout] = useState({
    deliveryType: deliveryType,
    fullName: "",
    email: "",
    mobileNumber: "",
  });

  const buyNowCtx = useContext(BuyNowContext);
  const buyNowOrderCtx = useContext(BuyNowOrderContext);
  const userProgressCtx = useContext(UserProgressContext);
  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleSelectDeliveryType(deliveryType) {
    setDeliveryType(deliveryType);
  }

  function handleInputChange(identifier, value) {
    setBuyNowCheckout({
      ...buyNowCheckout,
      [identifier]: value,
    });
  }

  function handleSubmitCheckoutBuyNow(event) {
    event.preventDefault();
    buyNowOrderCtx.addOrder(
      (buyNowOrderCtx.order.item = buyNowCtx.item),
      (buyNowOrderCtx.order.customer = buyNowCheckout)
    );
    console.log(buyNowOrderCtx.order);
  }

  function handleCloseCheckoutBuyNow() {
    userProgressCtx.hideCheckoutBuyNow();
  }

  function handleBackToBuyNow() {
    userProgressCtx.showBuyNow();
  }

  function handleShowAddressBuyNow() {
    userProgressCtx.showAddress();
  }

  return (
    <Modal
      className="checkout"
      open={userProgressCtx.progress === "checkout-buy-now"}
      onClose={
        userProgressCtx.progress === "checkout-buy-now"
          ? handleCloseCheckoutBuyNow
          : null
      }
    >
      <form action="" onSubmit={handleSubmitCheckoutBuyNow}>
        <h2>CHECKOUT</h2>
        <p>Total Amount: {currencyFormatter.format(buyNowTotal)}</p>

        <Select
          label="Select Delivery Type"
          onSelect={handleSelectDeliveryType}
          options={DELIVERYTYPE}
        />

        <Input
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          onChange={(event) =>
            handleInputChange("fullName", event.target.value)
          }
          placeholder="ENTER YOUR FULL NAME"
        />

        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          placeholder="ENTER YOUR EMAIL"
        />

        <Input
          label="Mobile Number"
          type="number"
          id="mobilNumber"
          name="mobileNumber"
          onChange={(event) =>
            handleInputChange("mobileNumber", event.target.value)
          }
          placeholder="ENTER YOUR MOBILE NUMBER"
        />

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckoutBuyNow}>
            Close Checkout
          </Button>
          <Button type="button" textOnly onClick={handleBackToBuyNow}>
            Back BuyNow
          </Button>
          <Button onClick={handleShowAddressBuyNow}>Next Address</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BuyNowCheckout;
