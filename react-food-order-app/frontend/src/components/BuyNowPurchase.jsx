import React, { useContext } from "react";
import Modal from "./ui/Modal";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./ui/Button";

function BuyNowPurchase() {
  const buyNowCtx = useContext(BuyNowContext);
  const userProgressCtx = useContext(UserProgressContext);

  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleCheckoutBuyNowClosePurchase() {
    userProgressCtx.hidePurchase();
  }

  function handleCheckoutBuyNowOrder() {
    userProgressCtx.showOrder();
  }

  function handleBackToPaymentBuyNow() {
    userProgressCtx.showPayment();
  }

  function handleSubmitPurchase(event) {
    event.preventDefault();
  }

  return (
    <Modal
      className="checkout"
      open={userProgressCtx.progress === "purchase"}
      onClose={
        userProgressCtx.progress === "purchase"
          ? handleCheckoutBuyNowClosePurchase
          : null
      }
    >
      <form action="" onSubmit={handleSubmitPurchase}>
        <h2>YOUR PURCHASING DETAILS</h2>
        <p>
          Your Total Purchasing Amount: {currencyFormatter.format(buyNowTotal)}
        </p>
        <p className="modal-actions">
          <Button
            type="button"
            textOnly
            onClick={handleCheckoutBuyNowClosePurchase}
          >
            Close Purchase
          </Button>

          <Button
            type="button"
            textOnly
            onClick={handleBackToPaymentBuyNow}
          >
            Back To Payment
          </Button>
          
          <Button onClick={handleCheckoutBuyNowOrder}>Next Order</Button>
        </p>
      </form>
    </Modal>
  );
}
export default BuyNowPurchase;

// function handleCheckoutBuy() {}
