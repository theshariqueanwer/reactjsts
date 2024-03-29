import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import {CartContext} from './context/shopping-cart-context.jsx';
import CartContextProvider from './context/shopping-cart-context.jsx';

function App() {

  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  // function handleAddItemToCart(id) {
  //   setShoppingCart((prevShoppingCart) => {
  //     const updatedItems = [...prevShoppingCart.items];

  //     const existingCartItemIndex = updatedItems.findIndex(
  //       (cartItem) => cartItem.id === id
  //     );
  //     const existingCartItem = updatedItems[existingCartItemIndex];

  //     if (existingCartItem) {
  //       const updatedItem = {
  //         ...existingCartItem,
  //         quantity: existingCartItem.quantity + 1,
  //       };
  //       updatedItems[existingCartItemIndex] = updatedItem;
  //     } else {
  //       const product = DUMMY_PRODUCTS.find((product) => product.id === id);
  //       updatedItems.push({
  //         id: id,
  //         name: product.title,
  //         price: product.price,
  //         quantity: 1,
  //       });
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }

  // function handleUpdateCartItemQuantity(productId, amount) {
  //   setShoppingCart((prevShoppingCart) => {
  //     const updatedItems = [...prevShoppingCart.items];
  //     const updatedItemIndex = updatedItems.findIndex(
  //       (item) => item.id === productId
  //     );

  //     const updatedItem = {
  //       ...updatedItems[updatedItemIndex],
  //     };

  //     updatedItem.quantity += amount;

  //     if (updatedItem.quantity <= 0) {
  //       updatedItems.splice(updatedItemIndex, 1);
  //     } else {
  //       updatedItems[updatedItemIndex] = updatedItem;
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }

  // const ctxValue = {
  //   items: shoppingCart.items,
  //   addItemToCart: handleAddItemToCart,
  //   updateItemQuantity: handleUpdateCartItemQuantity
  // }

  // ------------------------------------------------------------------------------

  // return (
  //   // <CartContext.Provider value={{ items: [] }}>
  //   // <CartContext.Provider value={shoppingCart}>
  //   <CartContext.Provider value={ctxValue}>

  //     {/* <Header
  //       cart={shoppingCart}
  //       onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
  //     /> */}

  //     <Header />

  //     <Shop onAddItemToCart={handleAddItemToCart} >
  //     {/* <Shop> */}

  //       {/* {DUMMY_PRODUCTS.map((product) => {
  //         return (
  //           <div key={product.id}>
  //             <img src={product.image} alt={product.title} />
  //             <h3>{product.title}</h3>
  //             <p>${product.price}</p>
  //             <button>Add to Cart</button>
  //           </div>
  //         );
  //       })} */}

  //       {/* {DUMMY_PRODUCTS.map((product) => (
  //         <li key={product.id}>
  //           <Product {...product} onAddToCart={onAddItemToCart} />
  //           <Product {...product} onAddToCart={handleAddItemToCart} />
  //         </li>
  //       ))} */}

  //       {DUMMY_PRODUCTS.map((product) => (
  //         <li key={product.id}>
  //           <Product {...product} />
  //         </li>
  //       ))}
        
  //     </Shop>

  //   </CartContext.Provider>
  // );

  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );


}

export default App;
