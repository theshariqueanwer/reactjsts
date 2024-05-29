import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending!",
        message: "sending card data please wait...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "firebase-url",
        {
          method: "PUT",
          params: {},
          headers: {
            "Content-Type": "application/json",
          },
          //   body: JSON.stringify(cart),
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
      const responseData = await response.json();
      console.log(responseData);

      // the below request we are sending to the spring boot application server
      //   fetch("http://localhost:3333/cart/updateCart", {
      //     method: "PUT",
      //     params: {},
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": "*",
      //     },
      //     body: JSON.stringify(cart),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => console.log("Cart Updated:", data))
      //     .catch((error) => console.error("Error updating cart:", error));
      // the above request is sending to the spring boot application server
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "firebase-url"
      );
      if (!response.ok) {
        throw new Error("fetching cart data failed");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
        totalPrice: cartData.totalPrice,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed",
        })
      );
    }
  };
};
