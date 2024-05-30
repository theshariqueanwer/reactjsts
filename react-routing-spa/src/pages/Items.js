import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ITEMS = [
  { id: "i1", title: "Item 1" },
  { id: "i2", title: "Item 2" },
  { id: "i3", title: "Item 3" },
  { id: "i4", title: "Item 4" },
  { id: "i5", title: "Item 5" },
];

function Items() {
  const navigate = useNavigate();
  const navigateHandlerHome = () => {
    // navigate("/home");
    navigate("/");
  };
  return (
    <>
      <h1>Hey take a look on our items</h1>
      <ul>
        {ITEMS.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={navigateHandlerHome}>Navigate to Home</button>
    </>
  );
}

export default Items;
