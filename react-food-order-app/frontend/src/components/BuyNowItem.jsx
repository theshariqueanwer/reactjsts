import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";

function BuyNowItem({ name, quantity, price }) {
  const buyNowCtx = useContext(BuyNowContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleIncreaseQuantity() {
    buyNowCtx.IncreaseQuantity();
  }

  function handleDecreaseQuantity() {
    buyNowCtx.decreaseQuantity();
    // if (buyNowCtx.item.quantity <= 1) {
    //   userProgressCtx.hideBuyNow();
    //   buyNowCtx.removeItem();
    // }
  }

  return (
    <li className="cart-item">
      <p>
        {/* {name} - {quantity} x {inrCurrencyFormatter.format(price * 83.4)} */}
        {quantity > 0
          ? `${name} - ${quantity} x ${currencyFormatter.format(price)}`
          : ""}
      </p>
      {quantity > 0 ? (
        <p className="cart-item-actions">
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </p>
      ) : (
        ""
      )}
    </li>
  );
}
export default BuyNowItem;