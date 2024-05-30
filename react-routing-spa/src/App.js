import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import Item from "./pages/Item";
import ItemDetail from "./pages/ItemDetail";
import Products from "./pages/Products";
import Items from "./pages/Items";

// This is alternate way to create routes  from version less than 6.4
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/welcome" element={<Welcome />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/product" element={<Product />} />
//     <Route path="/service" element={<Service />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="*" element={<About />} />
//     <Route path="/*" element={<About />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// This object based approach this was initial before layout
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "home", element: <Home /> },
//   { path: "/welcome", element: <Welcome /> },
//   { path: "/about", element: <About /> },
//   { path: "/product", element: <Product /> },
//   { path: "/service", element: <Service /> },
//   { path: "/contact", element: <Contact /> },
//   // ---------------------------------------
//   { path: "*", element: <About /> },
//   { path: "/*", element: <About /> },
// ]);

// ----------------------------------------------------------------------------

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/home", element: <Home /> },
//       { path: "/welcome", element: <Welcome /> },
//       { path: "/about", element: <About /> },
//       { path: "/product", element: <Product /> },
//       { path: "/products", element: <Products /> },
//       { path: "/item", element: <Item /> },
//       { path: "/items", element: <Items /> },
//       { path: "/service", element: <Service /> },
//       { path: "/contact", element: <Contact /> },
//       // { path: "*", element: <About /> },
//       // { path: "/*", element: <About /> },
//       { path: "/product/:productId", element: <ProductDetail /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//       { path: "/item/:id", element: <ItemDetail /> },
//       { path: "/items/:id", element: <ItemDetail /> },
//     ],
//   },
//   {
//     path: "admin",
//     element: "",
//     children: [],
//   },
// ]);

// ----------------------------------------------------------------------------

// This is absolute path which is start from slash /

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/welcome", element: <Welcome /> },
//       { path: "/product", element: <Product /> },
//       { path: "/products", element: <Products /> },
//       { path: "/item", element: <Item /> },
//       { path: "/items", element: <Items /> },
//       { path: "/product/:productId", element: <ProductDetail /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//       { path: "/item/:id", element: <ItemDetail /> },
//       { path: "/items/:id", element: <ItemDetail /> },
//     ],
//   }
// ]);

// ----------------------------------------------------------------------------

// This is absolute path which is start from slash root /root

// const router = createBrowserRouter([
//   {
//     path: "/root",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/root/", element: <Home /> },
//       { path: "/root/welcome", element: <Welcome /> },
//       { path: "/root/product", element: <Product /> },
//       { path: "/root/products", element: <Products /> },
//       { path: "/root/item", element: <Item /> },
//       { path: "/root/items", element: <Items /> },
//       { path: "/root/product/:productId", element: <ProductDetail /> },
//       { path: "/root/products/:productId", element: <ProductDetail /> },
//       { path: "/root/item/:id", element: <ItemDetail /> },
//       { path: "/root/items/:id", element: <ItemDetail /> },
//     ],
//   }
// ]);

// ----------------------------------------------------------------------------
// // This is absolute path which is start from slash / and slash root /root and slash user /user and slash admin /admin

// This is relative path
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/welcome", element: <Welcome /> },
//       { path: "/product", element: <Product /> },
//       { path: "/products", element: <Products /> },
//       { path: "/item", element: <Item /> },
//       { path: "/items", element: <Items /> },
//       { path: "/product/:productId", element: <ProductDetail /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//       { path: "/item/:id", element: <ItemDetail /> },
//       { path: "/items/:id", element: <ItemDetail /> },
//     ],
//   },
//   {
//     path: "/root",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/root/", element: <Home /> },
//       { path: "/root/welcome", element: <Welcome /> },
//       { path: "/root/product", element: <Product /> },
//       { path: "/root/products", element: <Products /> },
//       { path: "/root/item", element: <Item /> },
//       { path: "/root/items", element: <Items /> },
//       { path: "/root/product/:productId", element: <ProductDetail /> },
//       { path: "/root/products/:productId", element: <ProductDetail /> },
//       { path: "/root/item/:id", element: <ItemDetail /> },
//       { path: "/root/items/:id", element: <ItemDetail /> },
//     ],
//   },
//   {
//     path: "/user",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/user/", element: <Home /> },
//       { path: "/user/welcome", element: <Welcome /> },
//       { path: "/user/product", element: <Product /> },
//       { path: "/user/products", element: <Products /> },
//       { path: "/user/item", element: <Item /> },
//       { path: "/user/items", element: <Items /> },
//       { path: "/user/product/:productId", element: <ProductDetail /> },
//       { path: "/user/products/:productId", element: <ProductDetail /> },
//       { path: "/user/item/:id", element: <ItemDetail /> },
//       { path: "/user/items/:id", element: <ItemDetail /> },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/admin/", element: <Home /> },
//       { path: "/admin/welcome", element: <Welcome /> },
//       { path: "/admin/product", element: <Product /> },
//       { path: "/admin/products", element: <Products /> },
//       { path: "/admin/item", element: <Item /> },
//       { path: "/admin/items", element: <Items /> },
//       { path: "/admin/product/:productId", element: <ProductDetail /> },
//       { path: "/admin/products/:productId", element: <ProductDetail /> },
//       { path: "/admin/item/:id", element: <ItemDetail /> },
//       { path: "/admin/items/:id", element: <ItemDetail /> },
//     ],
//   },
// ]);

// ----------------------------------------------------------------------------
// This is relative path is not start from slash /
// In the relative path child path will append to parent path
// example of relative path -> the child path welcome append to parent path like this /welcome

// This is relative path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "welcome", element: <Welcome /> },
      { path: "product", element: <Product /> },
      { path: "products", element: <Products /> },
      { path: "item", element: <Item /> },
      { path: "items", element: <Items /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "item/:id", element: <ItemDetail /> },
      { path: "items/:id", element: <ItemDetail /> },
    ],
  },
  // example of relative path -> the child path welcome append to parent path like this /root/welcome
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <Home /> },
      { path: "welcome", element: <Welcome /> },
      { path: "product", element: <Product /> },
      { path: "products", element: <Products /> },
      { path: "item", element: <Item /> },
      { path: "items", element: <Items /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "item/:id", element: <ItemDetail /> },
      { path: "items/:id", element: <ItemDetail /> },
    ],
  },
  // example of relative path -> the child path welcome append to parent path like this /user/welcome
  {
    path: "/user",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "welcome", element: <Welcome /> },
      { path: "product", element: <Product /> },
      { path: "products", element: <Products /> },
      { path: "item", element: <Item /> },
      { path: "items", element: <Items /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "item/:id", element: <ItemDetail /> },
      { path: "items/:id", element: <ItemDetail /> },
    ],
  },
  // example of relative path -> the child path welcome append to parent path like this /admin/welcome
  {
    path: "/admin",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "welcome", element: <Welcome /> },
      { path: "product", element: <Product /> },
      { path: "products", element: <Products /> },
      { path: "item", element: <Item /> },
      { path: "items", element: <Items /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "item/:id", element: <ItemDetail /> },
      { path: "items/:id", element: <ItemDetail /> },
    ],
  },
]);

// ----------------------------------------------------------------------------

function App() {
  // return <div></div>;
  return <RouterProvider router={router} />;
}

export default App;

//https://sra.com/home
//https://sra.com/welcome
//https://sra.com/products
//https://sra.com/services

// https:// is protocol
// sra.com is the domain
// /products is the route
