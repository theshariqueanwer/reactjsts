import { cartAction } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    // and then send the Http request
    // fetch('firebase-url', { method: 'POST', params:"", body: JSON.stringify(newCart)})


    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );

  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

// const addItemToCartHandler = () => {
//   const newTotalQuantity = cart.totalQuantity + 1;
//   // cart.totalQuantity = cart.totalQuantity + 1; // we are directly mutating javascript object in memory so we can not do like this
//   const newTotalAmount = cart.totalAmount + price;
//   // cart.totalAmount = cart.totalAmount + price; // we are directly mutating javascript object in memory so we can not do like this

//   const updatedItems = cart.items.slice(); // create copy via slice method to avoid mutating
//   const existingItem = updatedItems.find(item => item.id === id)
//   if(existingItem) {
//     // const updatedItem = {
//     //  ...existingItem,
//     //   quantity: existingItem.quantity + 1
//     // }
//     // updatedItems[updatedItems.findIndex(item => item.id === id)] = updatedItem;
//     const updatedItem = {...existingItem}; // new object + copy existing properties
//     updatedItem.quantity++;
//     updatedItem.price = updatedItem.price + price;
//     const existingItemIndex = updatedItems.findIndex(item => item.id === id);
//     updatedItems[existingItemIndex] = updatedItem;
//   } else {
//     updatedItems.push({
//       id: id,
//       name: title,
//       price: price,
//       totalPrice: price,
//       quantity: 1,
//     })
//   }

//   const newCart = {
//     items: updatedItems,
//     totalQuantity: newTotalQuantity,
//     totalAmount: newTotalAmount,
//   }

//   dispatch(cartAction.replaceCart(newCart));

//   // and then send the Http request
//   // fetch('firebase-url', { method: 'POST', params:"", body: JSON.stringify(newCart)})


//   // dispatch(
//   //   cartAction.addItemToCart({
//   //     id,
//   //     title,
//   //     price,
//   //   })
//   // );

// };
