import { createContext, useState } from "react";

export const ItemContext = createContext({
  item: {},
  addItem: (item) => {},
  updateItem: () => {},
});

export function ItemContextProvider({ children }) {
  const [item, setItem] = useState({});

  function addItem(item) {
    setItem({ item });
  }

  function updateItem() {
    setItem({});
  }

  const itemCtx = {
    item: item,
    addItem,
    updateItem,
  };
  return (
    <ItemContext.Provider value={itemCtx}>{children}</ItemContext.Provider>
  );
}

export const CustomerContext = createContext({
  customer: {},
  addCustomer: (customer) => {},
  updateCustomer: () => {},
});

export function CustomerContextProvider({ children }) {
  const [customer, setCustomer] = useState({});

  function addCustomer(customer) {
    setCustomer({ customer });
  }

  function updateCustomer() {
    setCustomer({});
  }

  const customerCtx = {
    customer: customer,
    addCustomer,
    updateCustomer,
  };

  return (
    <CustomerContext.Provider value={customerCtx}>
      {children}
    </CustomerContext.Provider>
  );
}

export const AddressContext = createContext({
  address: {},
  addAddress: (address) => {},
  updateAddress: () => {},
});

export function AddressContextProvider({ children }) {
  const [address, setAddress] = useState({});

  function addAddress(address) {
    setAddress(address);
  }

  function updateAddress() {
    setAddress({});
  }

  const addressCtx = {
    address: address,
    addAddress,
    updateAddress,
  };

  return (
    <AddressContext.Provider value={addressCtx}>
      {children}
    </AddressContext.Provider>
  );
}

export const PaymentContext = createContext({
  payment: {},
  addPayment: (payment) => {},
  updatePayment: () => {},
});

export function PaymentContextProvider({ children }) {
  const [payment, setPayment] = useState({});

  function addPayment(payment) {
    setPayment(payment);
  }

  function updatePayment() {
    setPayment({});
  }

  const paymentCtx = {
    payment: payment,
    addPayment,
    updatePayment,
  };

  return (
    <PaymentContext.Provider value={paymentCtx}>
      {children}
    </PaymentContext.Provider>
  );
}

export const UpiContext = createContext({
  upi: {},
  addUpi: (upi) => {},
  updateUpi: () => {},
});

export function UpiContextProvider({ children }) {
  const [upi, setUpi] = useState({});

  function addUpi(upi) {
    setUpi(upi);
  }

  function updateUpi() {
    setUpi({});
  }

  const upiCtx = {
    upi: upi,
    addUpi,
    updateUpi,
  };

  return <UpiContext.Provider value={upiCtx}>{children}</UpiContext.Provider>;
}

export const CreditCardContext = createContext({
  creditCard: {},
  addCreditCard: (creditCard) => {},
  updateCreditCard: () => {},
});

export function CreditCardContextProvider({ children }) {
  const [creditCard, setCreditCard] = useState({});

  function addCreditCard(creditCard) {
    setCreditCard(creditCard);
  }

  function updateCreditCard() {
    setCreditCard({});
  }

  const creditCardCtx = {
    creditCard: creditCard,
    addCreditCard,
    updateCreditCard,
  };

  return (
    <CreditCardContext.Provider value={creditCardCtx}>
      {children}
    </CreditCardContext.Provider>
  );
}

export const DebitCardContext = createContext({
  debitCard: {},
  addDebitCard: (debitCard) => {},
  updateDebitCard: () => {},
});

export function DebitCardContextProvider({ children }) {
  const [debitCard, setDebitCard] = useState({});

  function addDebitCard(debitCard) {
    setDebitCard(debitCard);
  }

  function updateDebitCard() {
    setDebitCard({});
  }

  const debitCardCtx = {
    debitCard: debitCard,
    addDebitCard,
    updateDebitCard,
  };

  return (
    <DebitCardContext.Provider value={debitCardCtx}>
      {children}
    </DebitCardContext.Provider>
  );
}

export const NetBankingContext = createContext({
  netBanking: {},
  addNetBanking: (netBanking) => {},
  updateNetBanking: () => {},
});

export function NetBankingContextProvider({ children }) {
  const [netBanking, setNetBanking] = useState({});

  function addNetBanking(netBanking) {
    setNetBanking(netBanking);
  }

  function updateNetBanking() {
    setNetBanking({});
  }

  const netBankingCtx = {
    netBanking: netBanking,
    addNetBanking,
    updateNetBanking,
  };

  return (
    <NetBankingContext.Provider value={netBankingCtx}>
      {children}
    </NetBankingContext.Provider>
  );
}

const OrderContext = createContext({
  order: {},
  addOrder: () => {},
  updateOrder: () => {},
});

export function OrderContextProvider({ children }) {
  const [order, setOrder] = useState({});

  function addOrder(order) {
    setOrder({...order});
  }

  function updateOrder() {
    setOrder({});
  }

  const orderCtx = {
    order: order,
    addOrder,
    updateOrder,
  };

  return (
    <OrderContext.Provider value={orderCtx}>{children}</OrderContext.Provider>
  );
}

export default OrderContext;