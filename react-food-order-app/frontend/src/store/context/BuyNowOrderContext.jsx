import { createContext, useState } from "react";

const BuyNowOrderContext = createContext({
  order: {
    orderId: "",
    orderName: "",
    orderNumber: "",
    item: {
      id: "",
      name: "",
      description: "",
      price: 0,
      image: "",
      quantity: 0,
    },
    customer: {
      deliveryType: "",
      fullName: "",
      email: "",
      mobileNumber: "",
    },
    address: {
      apartmentNo: "",
      apartmentName: "",
      address: "",
      street: "",
      pinCode: "",
      city: "",
      state: "",
      country: "",
      landmark: "",
      area: "",
    },
    payment: {
      paymentType: "",
      upi: {
        upiId: "",
        amount: "",
      },
      creditCard: {
        cardNumber: "",
        cardHolderName: "",
        cardName: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        amount: "",
      },
      debitCard: {
        cardNumber: "",
        cardHolderName: "",
        cardName: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        amount: "",
      },
      netBanking: {
        userId: "",
        password: "",
        amount: "",
      },
    },
  },

  addOrder: (order) => {},
  updateOrder: (orderId) => {},
});

export function BuyNowOrderContextProvider({ children }) {
  const [order, setOrder] = useState({
    order: {
      orderId: "",
      orderName: "",
      orderNumber: "",
      item: {
        id: "",
        name: "",
        description: "",
        price: 0,
        image: "",
        quantity: 0,
      },
      customer: {
        deliveryType: "",
        fullName: "",
        email: "",
        mobileNumber: "",
      },
      address: {
        apartmentNo: "",
        apartmentName: "",
        address: "",
        street: "",
        pinCode: "",
        city: "",
        state: "",
        country: "",
        landmark: "",
        area: "",
      },
      payment: {
        paymentType: "",
        upi: {
          upiId: "",
          amount: "",
        },
        creditCard: {
          cardNumber: "",
          cardHolderName: "",
          cardName: "",
          expiryMonth: "",
          expiryYear: "",
          cvv: "",
          amount: "",
        },
        debitCard: {
          cardNumber: "",
          cardHolderName: "",
          cardName: "",
          expiryMonth: "",
          expiryYear: "",
          cvv: "",
          amount: "",
        },
        netBanking: {
          bank: "",
          userId: "",
          password: "",
          amount: "",
        },
      },
    },
  }); //

  const addOrder = (order) => {
    setOrder({ ...order });
  };

  const updateOrder = () => {
    setOrder({});
  };

  const orderCtx = {
    order: order,
    addOrder,
    updateOrder,
  };

  return (
    <BuyNowOrderContext.Provider value={orderCtx}>
      {children}
    </BuyNowOrderContext.Provider>
  );
}

export default BuyNowOrderContext;
