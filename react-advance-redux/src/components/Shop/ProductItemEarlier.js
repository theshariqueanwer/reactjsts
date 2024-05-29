import { cartAction } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";

const ProductItemEarlier = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    // dispatch(
    //   cartAction.addItemToCart({
    //     title: title,
    //     price: price,
    //     description: description,
    //   })
    // );

    // let use the Shot Cut
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItemEarlier;
