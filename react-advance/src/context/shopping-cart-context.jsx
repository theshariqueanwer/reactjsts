import { useState, createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
});

function shoppingCartReducer(state, action) {

    if(action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find(
            (product) => product.id === action.payload
          );
          updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }

        return {
          ...state, // not needed here because we have only one value in the state, But in the complex state object we need to for not to loose the any value
          items: updatedItems,
        };
    }
    else if(action.type === 'UPDATE_ITEM_QUANTITY') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );

        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
          ...state,
          items: updatedItems,
        };
    }
    return state;
}

export default function CartContextProvider({ children }) {

  const [ shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, { items: []});

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {

    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id

    })

    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];

    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id
    //   );
    //   const existingCartItem = updatedItems[existingCartItemIndex];

    //   if (existingCartItem) {
    //     const updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };
    //     updatedItems[existingCartItemIndex] = updatedItem;
    //   } else {
    //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    //     updatedItems.push({
    //       id: id,
    //       name: product.title,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }

    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {

    shoppingCartDispatch({
      type: "UPDATE_ITEM_QUANTITY",
      // productId: productId,  // we like this also but we will do in the standard way
      // amount: amount

      //   payload: {
      //     productId: productId,
      //     amount: amount,
      //   },

      payload: {  // this is javascript shortcut way
        productId,
        amount,
      },
    });

    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //   const updatedItemIndex = updatedItems.findIndex(
    //     (item) => item.id === productId
    //   );

    //   const updatedItem = {
    //     ...updatedItems[updatedItemIndex],
    //   };

    //   updatedItem.quantity += amount;

    //   if (updatedItem.quantity <= 0) {
    //     updatedItems.splice(updatedItemIndex, 1);
    //   } else {
    //     updatedItems[updatedItemIndex] = updatedItem;
    //   }

    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  const ctxValue = {
    // items: shoppingCart.items,
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  );

}
