import { createContext, useState } from "react";

const BuyNowContext = createContext({
  item: {},
  addItem: (item) => {},
  removeItem: () => {},
  IncreaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function BuyNowContextProvider({ children }) {
  const [item, setItem] = useState({});

  function addItem(item) {
    setItem({ ...item, quantity: 1 });
  }

  function removeItem() {
    setItem({});
  }

  function IncreaseQuantity() {
    setItem({ ...item, quantity: item.quantity + 1 });
  }

  function decreaseQuantity() {
    if (item.quantity > 1) {
      setItem({ ...item, quantity: item.quantity - 1 });
    } else if (item.quantity <= 1) {
      setItem({});
    }
  }

  const buyNowContext = {
    item: item,
    addItem,
    removeItem,
    IncreaseQuantity,
    decreaseQuantity,
  };

  // console.log(buyNowContext);
  // console.log(item);

  return (
    <BuyNowContext.Provider value={buyNowContext}>
      {children}
    </BuyNowContext.Provider>
  );
  
}

export default BuyNowContext;
