import React, { useContext, useState } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./ui/Button";
import CartContext from "../store/context/CartContext";
import UserProgressContext from "../store/context/UserProgressContext";
import { TAB } from "../data/data";
import Select from "./ui/Select";

function Header() {
  const [tab, setTab] = useState("");

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  function handleShowLogin() {
    userProgressCtx.showLogin();
  }

  function handleShowRegister() {
    userProgressCtx.showRegister();
  }

  function handleSelectTab(tab) {
    setMenu(tab);
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Your Restaurant" />
        {/* <h1 style={{"text-transform": "none"}} >iFood</h1> */}
        <h1 style={{ textTransform: "none" }}>iFood</h1>

        {/* <Button textOnly onClick={handleBuy}>
          BUY
        </Button>
        <Button textOnly onClick={handleSell}>
          SELL
        </Button> */}

        {/* <Select
          style={{
            backgroundColor: "#29251c",
            border: "none",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
            color: "#ffc404",
            letterSpacing: "0.2rem",
            textTransform: "none",
          }}
          onSelect={handleSelectMenu}
          options={MENU}
        /> */}

        <Select
          style={{
            backgroundColor: "#29251c",
            border: "none",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
            color: "#ffc404",
            letterSpacing: "0.2rem",
            textTransform: "none",
          }}
          onSelect={handleSelectTab}
          options={TAB}
        />
      </div>
      <nav>
        {/* <Button textOnly={true}>Cart (0)</Button> */}
        {/* {totalCartItems ? <Button textOnly>Cart ({totalCartItems})</Button> : <Button textOnly>Cart (0)</Button>} */}
        <Button style={{ marginRight: "8px" }} onClick={handleShowLogin}>
          Login
        </Button>
        <Button style={{ marginRight: "8px" }} onClick={handleShowRegister}>
          Register
        </Button>
        {/* <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button> */}
        <Button onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

export default Header;
