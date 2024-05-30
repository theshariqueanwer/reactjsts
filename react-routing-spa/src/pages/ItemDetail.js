import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ItemDetail() {
  const navigate = useNavigate();
  const param = useParams();

  const id = param.id;

  const navigateHandlerItems = () => {
    navigate("/items");
  };

  return (
    <>
      <h1>Item Detail</h1>
      <h2>Item Detail with Id {id}</h2>
      <button onClick={navigateHandlerItems}>Navigate to Items</button>
    </>
  );
}

export default ItemDetail;
