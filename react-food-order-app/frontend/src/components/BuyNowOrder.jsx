import React, { useContext } from "react";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";
import Modal from "./ui/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./ui/Button";

function BuyNowOrder() {
  const buyNowCtx = useContext(BuyNowContext);
  const userProgressCtx = useContext(UserProgressContext);

  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleCheckoutBuyNowCloseOrder() {
    userProgressCtx.hideOrder();
  }

  return (
    <Modal
      className="checkout"
      open={userProgressCtx.progress === "order"}
      onClose={
        userProgressCtx.progress === "order"
          ? handleCheckoutBuyNowCloseOrder
          : null
      }
    >
      <h2>YOUR ORDER DETAILS</h2>
      <p>Order Total Amount: {currencyFormatter.format(buyNowTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCheckoutBuyNowCloseOrder}>
          Close
        </Button>
      </p>
    </Modal>
  );
}

export default BuyNowOrder;
