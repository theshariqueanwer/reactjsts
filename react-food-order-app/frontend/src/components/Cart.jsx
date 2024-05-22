import React, { useContext } from "react";
import Modal from "./ui/Modal";
import CartContext from "../store/context/CartContext";
import { currencyFormatter, inrCurrencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/context/UserProgressContext";
import Button from "./ui/Button";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          //   <li key={item.id}>
          //     {item.name} - {item.quantity}
          //   </li>
          // <CartItem key={item.id} {...item} />
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncreaseItemQuantity={() => cartCtx.addItem(item)}
            onDecreaseItemQuantity={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      {/* <p className="cart-total">
        {inrCurrencyFormatter.format(cartTotal * 83.4)}
      </p> */}
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close Cart
        </Button>

        {/* {cartCtx.items.length > 0 ? (
          <Button onClick={handleCloseCart}>Checkout</Button>
        ) : null} */}

        {/* {cartCtx.items.length > 0 && (
          <Button onClick={handleCloseCart}>Checkout</Button>
        )} */}

        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
