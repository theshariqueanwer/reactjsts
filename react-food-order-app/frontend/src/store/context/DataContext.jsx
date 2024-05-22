import { createContext, useState } from "react";

const DataContext = createContext({
  deliveryType: "",
  paymentType: "",
  cardType: "",
  bank: "",
  addDeliveryType: () => {},
  removeDeliveryType: () => {},
  addPaymentType: () => {},
  removePaymentType: () => {},
  addCardType: () => {},
  removeCardType: () => {},
  addBank: () => {},
  removeBank: () => {},
  // addEventListener: () => {}
});

export function DataContextProvider({ children }) {
  const [deliveryType, setDeliveryType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [cardType, setCardType] = useState("");
  const [bank, setBank] = useState("");

  function addDeliveryType(type) {
    setDeliveryType(type);
  }
  function removeDeliveryType() {
    setDeliveryType("");
  }
  function addPaymentType(type) {
    setPaymentType(type);
  }
  function removePaymentType() {
    setPaymentType("");
  }
  function addCardType(type) {
    setCardType(type);
  }
  function removeCardType() {
    setCardType("");
  }
  function addBank(bank) {
    setBank(bank);
  }
  function removeBank() {
    setBank("");
  }
  // function addEventListener(type, callback) {}

  const dataCtx = {
    deliveryType: deliveryType,
    paymentType: paymentType,
    cardType: cardType,
    bank: bank,
    addDeliveryType,
    removeDeliveryType,
    addPaymentType,
    removePaymentType,
    addCardType,
    removeCardType,
    addBank,
    removeBank,
    // addEventListener,
    // removeEventListener
  };

  return (
    <DataContext.Provider value={dataCtx}>{children}</DataContext.Provider>
  );
}

export default DataContext;
