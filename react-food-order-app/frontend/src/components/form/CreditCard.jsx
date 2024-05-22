import React, { useContext, useState } from "react";
import Input from "../ui/Input";
import { CARDTYPE, MONTHS, YEARS } from "../../data/data";
import BuyNowContext from "../../store/context/BuyNowContext";
import Dropdown from "../ui/Dropdown";

function CreditCard({ onGetCardData }) {
  const buyNowCtx = useContext(BuyNowContext);
  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  const [creditCard, setCreditCard] = useState({
    creditCardNumber: "",
    creditCardName: "",
    creditCardHolderName: "",
    creditExpiryMonth: "",
    creditExpiryYear: "",
    creditCardCvv: "",
    amount: buyNowTotal,
  });

  function handleChange(identifier, value) {
    setCreditCard({
      [identifier]: value,
    });
    onGetCardData(creditCard);
  }

  return (
    <form action="">
      <Dropdown
        label="Card Name"
        onChange={(event) => handleChange("creditCardName", event.target.value)}
        options={CARDTYPE}
      />

      <Input
        label="Card Holder Name"
        type="text"
        id="creditCardHolderName"
        name="creditCardHolderName"
        onChange={(event) =>
          handleChange("creditCardHolderName", event.target.value)
        }
        placeholder="ENTER THE CREDIT CARD HOLDER NAME"
      />

      <div className="control-row">
        <Input
          label="Card Number"
          type="number"
          id="creditCardNumber"
          name="creditCardNumber"
          onChange={(event) =>
            handleChange("creditCardNumber", event.target.value)
          }
          placeholder="0000-0000-0000-0000"
        />

        <Dropdown
          label="Card Expiry Month"
          onChange={(event) => handleChange("expiryMonth", event.target.value)}
          options={MONTHS}
        />

        <Dropdown
          label="Card Expiry Year"
          onChange={(event) => handleChange("expiryYear", event.target.value)}
          options={YEARS}
        />

        <Input
          label="Card Cvv"
          type="number"
          id="creditCardCvv"
          name="creditCardCvv"
          min="3"
          max="3"
          onChange={(event) =>
            handleChange("creditCardCvv", event.target.value)
          }
          placeholder="000"
        />
      </div>
    </form>
  );
}

export default CreditCard;

{
  /* <Input
  label="Credit Card Expiry"
  type="month"
  id="creditCardExpiry"
  name="creditCardExpiry"
  onChange={(event) =>
    handleInputChange("creditCardExpiry", event.target.value)
  }
  placeholder="Enter Credit Card Expiry"
/>; */
}
