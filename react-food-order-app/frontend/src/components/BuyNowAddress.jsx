import React, { useContext, useState } from "react";
import BuyNowContext from "../store/context/BuyNowContext";
import UserProgressContext from "../store/context/UserProgressContext";
import Modal from "./ui/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./ui/Button";
import Input from "./ui/Input";
import BuyNowOrderContext from "../store/context/BuyNowOrderContext";

function BuyNowAddress() {
  const [buyNowAddress, setBuyNowAddress] = useState({
    apartmentNo: "",
    apartmentName: "",
    address: "",
    street: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
    landmark: "",
  });

  const buyNowCtx = useContext(BuyNowContext);
  const buyNowOrderCtx = useContext(BuyNowOrderContext);
  const userProgressCtx = useContext(UserProgressContext);

  const buyNowTotal = buyNowCtx.item.price * buyNowCtx.item.quantity;

  function handleInputChange(identifier, value) {
    setBuyNowAddress({
      ...buyNowAddress,
      [identifier]: value,
    });
  }

  function handleSubmitAddressBuyNow(event) {
    event.preventDefault();
    buyNowOrderCtx.addOrder((buyNowOrderCtx.order.address = buyNowAddress));
    console.log(buyNowOrderCtx.order);
  }

  function handleCloseAddressBuyNow() {
    userProgressCtx.hideAddress();
  }

  function handleBackToCheckoutBuyNow() {
    userProgressCtx.showCheckoutBuyNow();
  }

  function handleShowPaymentBuyNow() {
    userProgressCtx.showPayment();
  }

  return (
    <Modal
      className="checkout"
      open={userProgressCtx.progress === "address"}
      onClose={
        userProgressCtx.progress === "address" ? handleCloseAddressBuyNow : null
      }
    >
      <form action="" onSubmit={handleSubmitAddressBuyNow}>
        <h2>Your Address</h2>
        <p>Total Amount: {currencyFormatter.format(buyNowTotal)}</p>

        <div className="control-row">
          <Input
            label="Apartment No"
            type="text"
            id="apartmentNo"
            name="apartmentNo"
            onChange={(event) =>
              handleInputChange("apartmentNo", event.target.value)
            }
            placeholder="0000"
          />
          <Input
            label="Apartment Name"
            type="text"
            id="apartmentName"
            name="apartmentName"
            onChange={(event) =>
              handleInputChange("apartmentName", event.target.value)
            }
            placeholder="APARTMENT NAME"
          />

          <Input
            label="Address"
            type="text"
            id="address"
            name="address"
            onChange={(event) =>
              handleInputChange("address", event.target.value)
            }
            placeholder="ENTER YOUR ADDRESS"
          />
        </div>

        <div className="control-row">
          <Input
            label="Landmark"
            type="text"
            id="landmark"
            name="landmark"
            onChange={(event) =>
              handleInputChange("landmark", event.target.value)
            }
            placeholder="ENTER YOUR LANDMARK"
          />
          <Input
            label="Street"
            type="text"
            id="street"
            name="street"
            onChange={(event) =>
              handleInputChange("street", event.target.value)
            }
            placeholder="ENTER YOUR STREET"
          />
          <Input
            label="Pin Code"
            type="text"
            id="pinCode"
            name="pinCode"
            onChange={(event) =>
              handleInputChange("pinCode", event.target.value)
            }
            placeholder="000000"
          />
        </div>
        <div className="control-row">
          <Input
            label="City"
            type="text"
            id="city"
            name="city"
            onChange={(event) => handleInputChange("city", event.target.value)}
            placeholder="ENTER YOUR CITY"
          />
          <Input
            label="State"
            type="text"
            id="state"
            name="state"
            onChange={(event) => handleInputChange("state", event.target.value)}
            placeholder="ENTER YOUR STATE"
          />
          <Input
            label="Country"
            type="text"
            id="country"
            name="country"
            onChange={(event) =>
              handleInputChange("country", event.target.value)
            }
            placeholder="ENTER YOUR COUNTRY"
          />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseAddressBuyNow}>
            Close
          </Button>
          <Button type="button" textOnly onClick={handleBackToCheckoutBuyNow}>
            Back Checkout
          </Button>
          <Button onClick={handleShowPaymentBuyNow}>Next Payment</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BuyNowAddress;

{
  /* <div>
  <Input
    label="Pin Code"
    type="text"
    id="pinCode"
    name="pinCode"
    onChange={(event) => handleInputChange("pinCode", event.target.value)}
    placeholder="Pin Code"
  />

  <Input
    label="Zip Code"
    type="text"
    id="zipCode"
    name="zipCode"
    onChange={(event) => handleInputChange("zipCode", event.target.value)}
    placeholder="Zip Code"
  />

  <Input
    label="Postal Code"
    type="text"
    id="postalCode"
    name="postalCode"
    onChange={(event) => handleInputChange("postalCode", event.target.value)}
    placeholder="Postal Code"
  />
</div>; */
}
