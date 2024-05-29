import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const removeItemQuantityFromCart = () => {
    dispatch(cartAction.removeItemFromCart(id));
  }
  const addItemQuantityToCart = () => {
    dispatch(cartAction.addItemToCart({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
        <span>{quantity}</span>  X <span>{price}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemQuantityFromCart} >-</button>
          <button onClick={addItemQuantityToCart} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
