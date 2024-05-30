import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    // navigate("/home");
    navigate("/");
  };

  return (
    <>
      <h1>Hey look on our product</h1>
      <button onClick={navigateHandler}>Navigate to Home</button>
    </>
  );
}

export default Product;
