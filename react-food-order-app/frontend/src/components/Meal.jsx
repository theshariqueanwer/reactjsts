import React, { useContext } from "react";
import { currencyFormatter, inrCurrencyFormatter } from "../util/formatting.js";
import Button from "./ui/Button.jsx";
import CartContext from "../store/context/CartContext.jsx";
import UserProgressContext from "../store/context/UserProgressContext.jsx";
import BuyNowContext from "../store/context/BuyNowContext.jsx";

function Meal({ meal }) {
  const cartCtx = useContext(CartContext);
  const buyNowCtx = useContext(BuyNowContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleAddMealToBuyNowAndShowBuyNow() {
    buyNowCtx.addItem(meal);
    userProgressCtx.showBuyNow();
  }

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          {/* <p className="meal-item-price">
            {inrCurrencyFormatter.format(meal.price * 83.4)}
          </p> */}
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          {/* <button className="meal-item-order" >Buy Now</button>
            <button>Add to Cart</button> */}

          <Button
            className="meal-item-order"
            onClick={handleAddMealToBuyNowAndShowBuyNow}
          >
            Buy Now
          </Button>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

export default Meal;
