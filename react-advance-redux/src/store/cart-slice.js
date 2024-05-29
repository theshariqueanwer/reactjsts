import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount || 0;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// This below function we moving to the cart-actions.js file maintain the code readability and code maintainability
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending!",
//         message: "sending card data please wait...",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "firebase-url",
//         {
//           method: "PUT",
//           params: {},
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(cart),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("sending cart data failed");
//       }
//       const responseData = await response.json();
//       console.log(responseData);

//       // the below request we are sending to the spring boot application server
//       fetch("http://localhost:3333/cart/updateCart", {
//         method: "PUT",
//         params: {},
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify(cart),
//       }).then((response) => response.json())
//         .then((data) => console.log("Cart Updated:", data))
//         .catch((error) => console.error("Error updating cart:", error));
//       // the above request is sending to the spring boot application server
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "sent cart data successfully",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "sending cart data failed",
//         })
//       );
//     }
//   };
// };

export const cartAction = cartSlice.actions;

export default cartSlice;
