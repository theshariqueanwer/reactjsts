import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Product 4" },
  { id: "p5", title: "Product 5" },
];

function Products() {
  const navigate = useNavigate();

  const navigateHandlerHome = () => {
    // navigate("/home");
    navigate("/");
  };

  return (
    <>
      <h1>Hey look on our products</h1>
      <ul>
        {/* <li><Link to="/products/product-1" >Product 1</Link></li>
        <li><Link to="/products/product-2" >Product 2</Link></li>
        <li><Link to="/products/product-3" >Product 3</Link></li>
        <li><Link to="/products/product-4" >Product 3</Link></li> */}
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      {/* The below path in a Link is a relative path because we remove slash and make path relative so it will become /root/product/:id */}
      <h1>-----------------------------------------------------------------------------</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* this is below one also work */}
            {/* <Link to={`${product.id}`}>{product.title}</Link> */} 
            <Link to={product.id} relative="" >{product.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={navigateHandlerHome}>Navigate to Home</button>
    </>
  );
}

export default Products;
