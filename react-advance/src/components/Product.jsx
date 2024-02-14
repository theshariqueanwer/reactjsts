import { useContext } from "react";
import {CartContext} from "../context/shopping-cart-context";

export default function Product({
  id,
  image,
  title,
  price,
  description,
  // onAddToCart,
}) {

  // const CartCtx = useContext(CartContext)
  const {addItemToCart} = useContext(CartContext)  // with the array destructuring way

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
