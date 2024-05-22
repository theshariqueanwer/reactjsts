import React, { useContext, useState } from "react";
import Modal from "./ui/Modal";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./ui/Button";
import { PAYMENTTYPE } from "../data/data";
import Upi from "./form/Upi";
import Input from "./ui/Input";
import CreditCard from "./form/CreditCard";
import DebitCard from "./form/DebitCard";
import NetBanking from "./form/NetBanking";
import BuyNowOrderContext from "../store/context/BuyNowOrderContext";
import Select from "./ui/Select";
import DataContext from "../store/context/DataContext";

function BuyNowPayment() {
  const [paymentType, setPaymentType] = useState("");
  const [upi, setUpi] = useState({});
  const [creditCard, setCreditCard] = useState({});
  const [debitCard, setDebitCard] = useState({});
  const [netBanking, setNetBanking] = useState({});
  const [buyNowPayment, setBuyNowPayment] = useState({
    paymentType: paymentType,
    upi: {},
    creditCard: {},
    debitCard: {},
    netBanking: {},
  });

  const dataCtx = useContext(DataContext);
  const buyNowCtx = useContext(BuyNowContext);
  const buyNowOrderCtx = useContext(BuyNowOrderContext);
  const userProgressCtx = useContext(UserProgressContext);

  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleSelectPaymentType(paymentType) {
    setPaymentType(paymentType);
    dataCtx.addPaymentType(paymentType);
  }

  function handleUpiPayment(upi) {
    setUpi({ upi });
    setPayment({ ...(payment.upi = upi) });
  }

  function handleCreditCardPayment(creditCard) {
    setCreditCard({ creditCard });
    setPayment({ ...(payment.creditCard = creditCard) });
  }

  function handleDebitCardPayment(debitCard) {
    setDebitCard({ debitCard });
    setPayment({ ...(payment.debitCard = debitCard) });
  }

  function handleNetBankingPayment(netBanking) {
    setNetBanking({ netBanking });
    setNetBanking({ ...(payment.netBanking = netBanking) });
  }

  function handleClosePaymentBuyNow() {
    userProgressCtx.hidePayment();
  }

  function handleBackAddressBuyNow() {
    userProgressCtx.showAddress();
  }

  function handleShowPurchaseBuyNow() {
    userProgressCtx.showPurchase();
  }

  function handleSubmitPaymentBuyNow(event) {
    event.preventDefault();
    buyNowOrderCtx.addOrder((buyNowOrderCtx.order.payment = buyNowPayment));
    console.log(buyNowOrderCtx.order);
  }

  let formComponent;
  switch (paymentType) {
    case "UPI":
      formComponent = <Upi onGetUpiId={handleUpiPayment} />;
      break;
    case "CREDIT CARD":
      formComponent = <CreditCard onGetCardData={handleCreditCardPayment} />;
      break;
    case "DEBIT CARD":
      formComponent = <DebitCard onGetCardData={handleDebitCardPayment} />;
      break;
    case "NET BANKING":
      formComponent = <NetBanking onGetNetBanking={handleNetBankingPayment} />;
      break;
    case "SELECT":
      formComponent = null;
    default:
      formComponent = null;
      break;
  }

  return (
    <Modal
      className=""
      open={userProgressCtx.progress === "payment"}
      onClose={
        userProgressCtx.progress === "payment" ? handleClosePaymentBuyNow : null
      }
    >
      <form action="" onSubmit={handleSubmitPaymentBuyNow}>
        <h2>
          PAYMENT {dataCtx.paymentType === "" ? "SELECT" : dataCtx.paymentType}
        </h2>
        <p>
          Your Total Payment Amount: {currencyFormatter.format(buyNowTotal)}
        </p>

        <Select
          label="Select Payment Type"
          onSelect={handleSelectPaymentType}
          options={PAYMENTTYPE}
        />

        {formComponent}

        <div className="control-row">
          {formComponent && (
            <Input
              label="Your Payment Amount"
              type="text"
              id="amount"
              name="amount"
              disabled
              value={currencyFormatter.format(buyNowTotal)}
              placeholder="ENTER THE AMOUNT"
            />
          )}
        </div>

        <p className="modal-actions">
          <Button textOnly onClick={handleClosePaymentBuyNow}>
            Close Payment
          </Button>
          <Button onClick={handleBackAddressBuyNow}>Back Address</Button>
          <Button onClick={handleShowPurchaseBuyNow}>Next Purchase</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BuyNowPayment;
