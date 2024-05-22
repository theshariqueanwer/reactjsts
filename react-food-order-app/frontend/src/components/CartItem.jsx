import React, { useContext } from 'react'
import { currencyFormatter, inrCurrencyFormatter } from '../util/formatting'
import CartContext from '../store/context/CartContext';
import UserProgressContext from '../store/context/UserProgressContext';

function CartItem({name, quantity, price, onIncreaseItemQuantity, onDecreaseItemQuantity}) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleAddItem() {}
    function handleRemoveItem() {}

  return (
    <li className='cart-item'>
        {/* <p>
            {name} - {quantity} x {inrCurrencyFormatter.format(price * 83.4)}
        </p> */}
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecreaseItemQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncreaseItemQuantity}>+</button>
        </p>
    </li>
  )
}

export default CartItem
