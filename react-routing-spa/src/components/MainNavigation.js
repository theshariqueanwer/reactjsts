import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? classes.active : undefined)
              }
              end
              // style={({isActive}) => ({ textAlign: isActive ? 'center' : 'left'})}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product" // there is issue with this path while making is active but after make active not showing as active
              className={({ isActive }) =>
                (isActive ? classes.active : undefined)
              }
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="product">Product</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default MainNavigation;
