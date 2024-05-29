import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  {
    id: "p1",
    title: "First Book",
    price: 6,
    description: "This is a my first book - amazing first!",
  },
  {
    id: "p2",
    title: "Second Book",
    price: 5,
    description: "This is a my second book - amazing second!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
