import { useContext } from "react";
import {CartContext} from "../context/shopping-cart-context";

// export default function Cart({ onUpdateItemQuantity }) {
export default function Cart() {  


  // const cartCtx = useContext(CartContext);
  const { items, updateItemQuantity } = useContext(CartContext);  // with the array destructuring way

  // const totalPrice = cartCtx.items.reduce(
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  // ---------------------------------------------------------------------------------------------------
  // reduce function
  // const numbers = [1, -1, 2, 3];

  // const sum = numbers.reduce((accumulator, currentValue) => { 
  //   return accumulator + currentValue
  // }, 0);

  // const sum2 = numbers.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );

  // need to check 
  // const value = numbers.reduce((accumulator, currentValue) => { accumulator.push(currentValue); return accumulator})
//------------------------------------------------------------------------------------------------------


  return (
    // <CartContext.Consumer>
    //   {(cartCtx) => {
    //       const totalPrice = cartCtx.items.reduce(
    //         (acc, item) => acc + item.price * item.quantity,
    //         0
    //       );
    //       const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
    //     return (
    //         <div id="cart">
    //         {/* {cartCtx.items.length === 0 && <p>No items in cart!</p>} */}
    //         {cartCtx.items.length === 0 && <p>No items in cart!</p>}
    //         {/* {cartCtx.items.length > 0 && ( */}
    //         {cartCtx.items.length > 0 && (
    //           <ul id="cart-items">
    //             {/* {cartCtx.items.map((item) => { */}
    //             {cartCtx.items.map((item) => {
    //               const formattedPrice = `$${item.price.toFixed(2)}`;
      
    //               return (
    //                 <li key={item.id}>
    //                   <div>
    //                     <span>{item.name}</span>
    //                     <span> ({formattedPrice})</span>
    //                   </div>
    //                   <div className="cart-item-actions">
    //                     <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
    //                       -
    //                     </button>
    //                     <span>{item.quantity}</span>
    //                     <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
    //                       +
    //                     </button>
    //                   </div>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         )}
    //         <p id="cart-total-price">
    //           Cart Total: <strong>{formattedTotalPrice}</strong>
    //         </p>
    //       </div>
    //     )
    //   }}
    // </CartContext.Consumer>
    
    <div id="cart">
      {/* {cartCtx.items.length === 0 && <p>No items in cart!</p>} */}
      {items.length === 0 && <p>No items in cart!</p>}
      {/* {cartCtx.items.length > 0 && ( */}
      {items.length > 0 && (
        <ul id="cart-items">
          {/* {cartCtx.items.map((item) => { */}
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}














// import { useContext } from "react";
// import CartContext from "../context/shopping-cart-context";

// export default function Cart({ onUpdateItemQuantity }) {


//   // const cartCtx = useContext(CartContext);
//   // const { items } = useContext(CartContext);  // with the array destructuring way

//   // const totalPrice = cartCtx.items.reduce(
//   // const totalPrice = items.reduce(
//   //   (acc, item) => acc + item.price * item.quantity,
//   //   0
//   // );
//   // const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//   return (
//     <CartContext.Consumer>
//       {(cartCtx) => {
//           const totalPrice = cartCtx.items.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//             0
//           );
//           const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
//         return (
//             <div id="cart">
//             {/* {cartCtx.items.length === 0 && <p>No items in cart!</p>} */}
//             {cartCtx.items.length === 0 && <p>No items in cart!</p>}
//             {/* {cartCtx.items.length > 0 && ( */}
//             {cartCtx.items.length > 0 && (
//               <ul id="cart-items">
//                 {/* {cartCtx.items.map((item) => { */}
//                 {cartCtx.items.map((item) => {
//                   const formattedPrice = `$${item.price.toFixed(2)}`;
      
//                   return (
//                     <li key={item.id}>
//                       <div>
//                         <span>{item.name}</span>
//                         <span> ({formattedPrice})</span>
//                       </div>
//                       <div className="cart-item-actions">
//                         <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
//                           -
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
//                           +
//                         </button>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//             <p id="cart-total-price">
//               Cart Total: <strong>{formattedTotalPrice}</strong>
//             </p>
//           </div>
//         )
//       }}
//     </CartContext.Consumer>
    
//     // <div id="cart">
//     //   {/* {cartCtx.items.length === 0 && <p>No items in cart!</p>} */}
//     //   {items.length === 0 && <p>No items in cart!</p>}
//     //   {/* {cartCtx.items.length > 0 && ( */}
//     //   {items.length > 0 && (
//     //     <ul id="cart-items">
//     //       {/* {cartCtx.items.map((item) => { */}
//     //       {items.map((item) => {
//     //         const formattedPrice = `$${item.price.toFixed(2)}`;

//     //         return (
//     //           <li key={item.id}>
//     //             <div>
//     //               <span>{item.name}</span>
//     //               <span> ({formattedPrice})</span>
//     //             </div>
//     //             <div className="cart-item-actions">
//     //               <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
//     //                 -
//     //               </button>
//     //               <span>{item.quantity}</span>
//     //               <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
//     //                 +
//     //               </button>
//     //             </div>
//     //           </li>
//     //         );
//     //       })}
//     //     </ul>
//     //   )}
//     //   <p id="cart-total-price">
//     //     Cart Total: <strong>{formattedTotalPrice}</strong>
//     //   </p>
//     // </div>
//   );
// }
