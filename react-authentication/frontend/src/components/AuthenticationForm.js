import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  function cancelHandler() {
    navigate("/");
  }

  return (
    <>
      <Form method="post" className={classes.form}>
        <div className={classes.actions}>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Register the User" : "Login the User"}
          </button>
          {/* <button onClick={switchAuthHandler} type="button">
            Login
          </button> */}
        </div>
        {/* <h1>{isLogin ? "Log in" : "Create a new user"}</h1> */}
        <h1>
          {isLogin
            ? "Log with the existing User"
            : "Register with the new User"}
        </h1>
        {!isLogin && (
          <p>
            <label htmlFor="email">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email" required  />
        </p>
        {!isLogin && (
          <p>
            <label htmlFor="email">Mobile Number</label>
            <input
              id="mobile"
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              required
            />
          </p>
        )}
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" placeholder="Password" required />
        </p>
        <div className={classes.actions}>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button> */}
          <button type="button">{isLogin ? "Login" : "Register"}</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </Form>
    </>

    // <>
    //   <Form method="post" className={classes.form}>

    //     <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
    //     <p>
    //       <label htmlFor="email">Email</label>
    //       <input id="email" type="email" name="email" required />
    //     </p>
    //     <p>
    //       <label htmlFor="image">Password</label>
    //       <input id="password" type="password" name="password" required />
    //     </p>
    //     <div className={classes.actions}>
    //       <button onClick={switchAuthHandler} type="button">
    //         {isLogin ? 'Create new user' : 'Login'}
    //       </button>
    //       <button>Save</button>
    //     </div>
    //   </Form>
    // </>
  );
}

export default AuthForm;
