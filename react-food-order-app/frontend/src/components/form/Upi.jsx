import React, { useContext, useState } from "react";
import Input from "../ui/Input";
import BuyNowContext from "../../store/context/BuyNowContext";

function Upi({onGetUpiId}) {

  const buyNowCtx = useContext(BuyNowContext);
  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  const [upi, setUpi] = useState({
    upiId: "",
    amount: buyNowTotal
  });

  function handleInputChange(identifier, value) {
    setUpi({
      ...upi,
      [identifier]: value
    })
    onGetUpiId(upi);
  }

  return (
    <form action="" >
      <Input
        label="UPI ID"
        type="email"
        id="upiId"
        name="upiId"
        onChange={(event) => handleInputChange("upiId", event.target.value)}
        placeholder="ENTER YOUR UPI ID"
      />
      <span>verify your upi id</span>
    </form>
  );
}

export default Upi;
