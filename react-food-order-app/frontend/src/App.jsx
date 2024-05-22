import BuyNow from "./components/BuyNow";
import BuyNowAddress from "./components/BuyNowAddress";
import BuyNowCheckout from "./components/BuyNowCheckout";
import BuyNowOrder from "./components/BuyNowOrder";
import BuyNowPayment from "./components/BuyNowPayment";
import BuyNowPurchase from "./components/BuyNowPurchase";
import Cart from "./components/Cart";
import CartCheckout from "./components/CartCheckout";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import { BuyNowContextProvider } from "./store/context/BuyNowContext";
import { BuyNowOrderContextProvider } from "./store/context/BuyNowOrderContext";
import { CartContextProvider } from "./store/context/CartContext";
import { DataContextProvider } from "./store/context/DataContext";
import { OrderContextProvider } from "./store/context/OrderContext";
import { UserProgressContextProvider } from "./store/context/UserProgressContext";

function App() {
  return (
      <BuyNowOrderContextProvider>
        <DataContextProvider>
          <UserProgressContextProvider>
            <BuyNowContextProvider>
              <CartContextProvider>
                <Header />
                <Login />
                <Register />
                <Meals />
                <BuyNow />
                <BuyNowCheckout />
                <BuyNowAddress />
                <BuyNowPayment />
                <BuyNowPurchase />
                <BuyNowOrder />
                <Cart />
                <Checkout />
                <CartCheckout />
              </CartContextProvider>
            </BuyNowContextProvider>
          </UserProgressContextProvider>
        </DataContextProvider>
      </BuyNowOrderContextProvider>
  );
}

export default App;
