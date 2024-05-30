import React from "react";
import { useNavigate } from "react-router-dom";

function Item() {
  const navigate = useNavigate();
  const navigateHandlerHome = () => {
    // navigate("/home");
    navigate("/");
  };
  return (
    <>
      <h1>Hey take a look on our items</h1>
      <button onClick={navigateHandlerHome}>Navigate to Home</button>
    </>
  );
}

export default Item;
