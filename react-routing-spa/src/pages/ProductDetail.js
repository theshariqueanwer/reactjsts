import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
    const navigate = useNavigate();
  const param = useParams();
  const productId = param.productId;

  const navigateHandlerProducts = () => {
    // navigate("/products");
    navigate(-1);
  }

  return (
    <>
      <h1>Product Details</h1>
      <h2>Product Detail with Id {productId}</h2>
      {/* only two dot will work one does not make any scene */}
      {/* <Link to=".">Back</Link><br/> */} 
      <Link to=".." relative="path">Back</Link><br/>
      <button onClick={navigateHandlerProducts}>Navigate to Products</button>
    </>
  );
}

export default ProductDetail;
