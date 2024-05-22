import React, { useContext, useState } from "react";
import Input from "../ui/Input";
import { CARDTYPE, MONTHS, YEARS } from "../../data/data";
import Dropdown from "../ui/Dropdown";
import BuyNowContext from "../../store/context/BuyNowContext";

function DebitCard({ onGetCardData }) {
  const buyNowCtx = useContext(BuyNowContext);
  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  const [debitCard, setDebitCard] = useState({
    debitCardNumber: "",
    debitCardName: "",
    debitCardHolderName: "",
    debitExpiryMonth: "",
    debitExpiryYear: "",
    debitCardCvv: "",
    amount: buyNowTotal,
  });

  function handleChange(identifier, value) {
    setDebitCard({
      [identifier]: value,
    });
    onGetCardData(debitCard);
  }

  return (
    <div>
      <form action="">
        <Dropdown
          label="Card Name"
          onChange={(event) =>
            handleChange("debitCardName", event.target.value)
          }
          options={CARDTYPE}
        />
        <Input
          label="Card Holder Name"
          type="text"
          id="debitCardHolderName"
          name="debitCardHolderName"
          onChange={(event) =>
            handleChange("debitCardHolderName", event.target.value)
          }
          placeholder="ENTER THE DEBIT CARD HOLDER NAME"
        />

        <div className="control-row">
          <Input
            label="Card Number"
            type="number"
            id="debitCardNumber"
            name="debitCardNumber"
            onChange={(event) =>
              handleChange("debitCardNumber", event.target.value)
            }
            placeholder="0000-0000-0000-0000"
          />
          <Dropdown
            label="Card Expiry Month"
            onChange={(event) =>
              handleChange("debitExpiryMonth", event.target.value)
            }
            options={MONTHS}
          />

          <Dropdown
            label="Card Expiry Year"
            onChange={(event) =>
              handleChange("debitExpiryYear", event.target.value)
            }
            options={YEARS}
          />

          <Input
            label="Card Cvv"
            type="number"
            id="debitCardCVV"
            name="debitCardCVV"
            min="3"
            max="3"
            onChange={(event) =>
              handleChange("debitCardCVV", event.target.value)
            }
            placeholder="000"
          />
        </div>
      </form>
    </div>
  );
}

export default DebitCard;
