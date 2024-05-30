import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateHandlerProduct = () => {
    navigate("/product");
  };

  const navigateHandlerProducts = () => {
    navigate("/products");
  };

  const navigateHandlerItem = () => {
    navigate("/item");
  };

  const navigateHandlerItems = () => {
    navigate("/items");
  };

  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>visit our list of <a href="/product">products pages</a></p> */}
      <p>{/* visit our list of <Link to="/product">products pages</Link> */}</p>
      {/* The below path in a Link is a relative path because we remove slash and make path relative so it will become /root/product */}
      <p>
        visit our list of <Link to="product">product page</Link>
      </p>
      <p>
        visit our list of <Link to="products">products pages</Link>
      </p>
      <button onClick={navigateHandlerProduct}>Navigate to Product</button>
      <button onClick={navigateHandlerProducts}>Navigate to Products</button>
      <button onClick={navigateHandlerItem}>Navigate to Item</button>
      <button onClick={navigateHandlerItems}>Navigate to Items</button>
    </>
  );
}

export default Home;

// react router dom support dynamic path segments or path parameters

// const navigateHandler = () => {
//   navigate("/product", {
//     replace: true,
//     state: {
//       from: "home",
//     },
//   });
// };
