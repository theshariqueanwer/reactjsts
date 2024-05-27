import { useState } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (identifier, value) => {
    if (identifier === "email") {
      setEmail(value);
    }
    if (identifier === "password") {
      setPassword(value);
    }
  };

  const onLogin = () => {
    setSubmitted(true);
    // if (email !== "" && password !== "") {
    //   dispatch(authActions.login(email, password));
    // }
  };

  const enterEmail = submitted && !email;
  const enterPassword = submitted && !password;

  const enterValidEmail = !email.includes("@");
  const enterValidPassword = submitted && password.trim().length >= 6;

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());
    if (
      event.target.email.value !== "" &&
      !event.target.password.value !== ""
    ) {
      dispatch(authActions.login(email, password));
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitForm}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(event) => onInputChange("email", event.target.value)}
              // onChange={(event) => onInputChange(setEmail(event.target.value))}
            />
            {/* {enterEmail ? <span>please enter your email</span> : ""}
            {enterValidEmail ? <span>please enter your valid email</span> : ""} */}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(event) => onInputChange("email", event.target.value)}
              // onChange={(event) =>
              //   onInputChange(setPassword(event.target.value))
              // }
            />
            {/* {enterPassword ? <span>please enter your password</span> : ""}
            {enterValidPassword ? (
              <span>please enter your valid password</span>
            ) : (
              ""
            )} */}
          </div>
          <button onClick={onLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

// setLogin(loginData);
// console.log(login);

// console.log(event.target.email.value);
// console.log(event.target.password.value);
// event.target.email.value = '';
// event.target.password.value = '';

// if(!email) {
//   return <p>please enter your email</p>
// }
// if(!password) {
//   return <p>please enter your password</p>
// }
// if(!email.includes("@")) {
//   return <p>please enter your valid email</p>
// }
// if(!password.trim().length >= 6) {
//   return <p>please enter your valid password</p>
// }
