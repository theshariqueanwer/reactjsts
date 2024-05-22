import React, { useContext, useState } from "react";
import { BANKS } from "../../data/data";
import Input from "../ui/Input";
import BuyNowContext from "../../store/context/BuyNowContext";
import Select from "../ui/Select";

function NetBanking({ onGetNetBanking }) {
  const buyNowCtx = useContext(BuyNowContext);
  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  const [bank, setBank] = useState("");
  const [netBanking, setNetBanking] = useState({
    bank: bank,
    userId: "",
    password: "",
    amount: buyNowTotal,
  });

  function handleSelectBank(bank) {
    setBank(bank);
  }

  function handleInputChange(identifier, value) {
    setNetBanking({
      ...netBanking,
      [identifier]: value,
    });
    onGetNetBanking(userIdAndPasswordAndBank);
  }

  const netBankingUi = (
    <div className="control-row">
      <Input
        label="User ID"
        type="text"
        id="userId"
        name="userId"
        min="16"
        max="16"
        onChange={(event) => handleInputChange("userId", event.target.value)}
        placeholder="USER ID"
      />
      <Input
        label="Password"
        type="password"
        id="password"
        name="password"
        min="16"
        max="16"
        onChange={(event) => handleInputChange("password", event.target.value)}
        placeholder="PASSWORD"
      />
    </div>
  );

  let formContent;
  switch (bank) {
    case "STATE BANK":
      formContent = (
        <div>
          <span>You can make a payment from here only or else </span>
          <span>you can go to bank by clicking on this link STATE BANK</span>
          {netBankingUi}
        </div>
      );
      break;
    case "HDFC BANK":
      formContent = (
        <div>
          <span>You can make a payment from here only or else </span>
          <span>you can go to bank by clicking on this link HDFC BANK</span>
          {netBankingUi}
        </div>
      );
      break;
    case "ICICI BANK":
      formContent = (
        <div>
          <span>You can make a payment from here only or else </span>
          <span>you can go to bank by clicking on this link ICICI BANK</span>
          {netBankingUi}
        </div>
      );
      break;
    case "AXIS BANK":
      formContent = (
        <div>
          <span>You can make a payment from here only or else </span>
          <span>you can go to bank by clicking on this link AXIS BANK</span>
          {netBankingUi}
        </div>
      );
      break;
    case "SELECT BANK":
      formContent = null;
    default:
      formContent = null;
      break;
  }

  return (
    <div>
      <Select
        label="Select The Bank"
        onSelect={handleSelectBank}
        options={BANKS}
      />
      {formContent}
    </div>
  );
}

export default NetBanking;

// S04065O8C2804241200030
// S04065O8R3004241200001