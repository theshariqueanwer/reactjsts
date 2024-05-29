import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h3>Your Cart Quantity: {cartTotalQuantity}</h3>
      <h3>Your Cart Amount: $ {cartTotalAmount}</h3>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
