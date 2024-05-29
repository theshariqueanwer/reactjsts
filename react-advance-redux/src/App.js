import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // useEffect(() => {
  //   const addItemToCart = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending!",
  //         message: "sending card data please wait...",
  //       })
  //     );
  //     const response = await fetch(
  //       "firebase-url",
  //       {
  //         method: "PUT",
  //         params: {},
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("sending cart data failed");
  //     }
  //     const responseData = await response.json();
  //     console.log(responseData);
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "sent cart data successfully",
  //       })
  //     );
  //   };

  //   if(isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   addItemToCart().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "sending cart data failed",
  //       })
  //     );
  //   });

  //   // this below request we are sending to the spring boot application server
  //   fetch("http://localhost:3333/cart/updateCart", {
  //     method: "PUT",
  //     params: {},
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(cart),
  //   }).then((response) => response.json())
  //     .then((data) => console.log("Cart Updated:", data))
  //     .catch((error) => console.error("Error updating cart:", error));
  //   // the above request is sending to the spring boot application
  //
  // }, [cart, dispatch]);

  useEffect(() =>{
    if(isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
