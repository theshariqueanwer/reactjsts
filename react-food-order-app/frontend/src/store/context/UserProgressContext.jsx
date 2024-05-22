import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // buyNow, cart, checkout, address, payment, purchase, order, success

  showLogin: () => {},
  hideLogin: () => {},

  showRegister: () => {},
  hideRegister: () => {},

  showLogout: () => {},
  hideLogout: () => {},

  showBuyNow: () => {},
  hideBuyNow: () => {},

  showCart: () => {},
  hideCart: () => {},

  showCheckout: () => {},
  hideCheckout: () => {},

  showCheckoutCart: () => {},      // 
  hideCheckoutCart: () => {},      //

  showCheckoutBuyNow: () => {},
  hideCheckoutBuyNow: () => {},

  showAddress: () => {},
  hideAddress: () => {},

  showPayment: () => {},
  hidePayment: () => {},

  showPurchase: () => {},
  hidePurchase: () => {},

  showOrder: () => {},
  hideOrder: () => {},

  showSuccess: () => {},
  hideSuccess: () => {}

});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showLogin() {
    setUserProgress("login");
  }
  function hideLogin() {
    setUserProgress("");
  }

  function showRegister() {
    setUserProgress("register");
  }
  function hideRegister() {
    setUserProgress("");
  }

  function showLogout() {
    setUserProgress("logout");
  }
  function hideLogout() {
    setUserProgress("");
  }

  function showBuyNow() {
    setUserProgress("buynow");
  }
  function hideBuyNow() {
    setUserProgress("");
  }

  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }
  function hideCheckout() {
    setUserProgress("");
  }

  function showCheckoutCart() {
    setUserProgress("checkout-cart");
  }
  function hideCheckoutCart() {
    setUserProgress("");
  }

  function showCheckoutBuyNow() {
    setUserProgress("checkout-buy-now");
  }
  function hideCheckoutBuyNow() {
    setUserProgress("");
  }

  function showAddress() {
    setUserProgress("address");
  }
  function hideAddress() {
    setUserProgress("");
  }

  function showPayment() {
    setUserProgress("payment");
  }
  function hidePayment() {
    setUserProgress("");
  }

  function showPurchase() {
    setUserProgress("purchase");
  }
  function hidePurchase() {
    setUserProgress("");
  }

  function showOrder() {
    setUserProgress("order");
  }
  function hideOrder() {
    setUserProgress("");
  }

  function showSuccess() {
    setUserProgress("success");
  }
  function hideSuccess() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,

    showLogin,
    hideLogin,

    showRegister,
    hideRegister,

    showLogout,
    hideLogout,

    showBuyNow,
    hideBuyNow,

    showCart,
    hideCart,

    showCheckout,
    hideCheckout,

    showCheckoutCart,
    hideCheckoutCart,

    showCheckoutBuyNow,
    hideCheckoutBuyNow,

    showAddress,
    hideAddress,

    showPayment,
    hidePayment,

    showPurchase,
    hidePurchase,

    showOrder,
    hideOrder,

    showSuccess,
    hideSuccess

  };

  console.log(userProgress.progress);


  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
