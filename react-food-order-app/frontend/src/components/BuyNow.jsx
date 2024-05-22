import React, { useContext } from "react";
import Modal from "./ui/Modal";
import UserProgressContext from "../store/context/UserProgressContext";
import Button from "./ui/Button";
import { currencyFormatter } from "../util/formatting";
import BuyNowContext from "../store/context/BuyNowContext";
import BuyNowItem from "./BuyNowItem";

function BuyNow() {
  const buyNowCtx = useContext(BuyNowContext);
  const userProgressCtx = useContext(UserProgressContext);

  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleCloseBuyNow() {
    userProgressCtx.hideBuyNow();
    buyNowCtx.removeItem();
  }
  // const price = buyNowCtx.item.price;

  function handleShowCheckoutBuyNow() {
    userProgressCtx.showCheckoutBuyNow();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "buynow"}
      onClose={userProgressCtx.progress === "buynow" ? handleCloseBuyNow : null}
    >
      <h2>YOUR ARE ORDERING</h2>
      {/* <p>{`${buyNowCtx.item.name} - ${buyNowCtx.item.quantity} x ${inrCurrencyFormatter.format(price * 83.4)}`}</p> */}
      <BuyNowItem
        name={buyNowCtx.item.name}
        quantity={buyNowCtx.item.quantity}
        price={buyNowCtx.item.price}
      />
      <p className="cart-total">
        {/* {currencyFormatter.format(buyNowTotal)} */}
        {buyNowCtx.item.quantity > 0
          ? `${currencyFormatter.format(buyNowTotal)}`
          : "$0.00"}
        {/* {buyNowCtx.item.quantity > 0 && `${currencyFormatter.format(buyNowTotal)}`} */}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseBuyNow}>
          Close BuyNow
        </Button>
        {/* {buyNowCtx.item.quantity > 0 ? <Button onClick={handleCloseBuyNow}>Checkout</Button> : ''} */}
        {/* {buyNowCtx.item.quantity > 0 ? <Button onClick={handleCheckoutBuyNow}>Checkout</Button> : ''} */}
        {buyNowCtx.item.quantity > 0 && (
          <Button onClick={handleShowCheckoutBuyNow}>Next Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default BuyNow;
