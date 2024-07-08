import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData();
  // const [searchParams, setSearchParams] = useSearchParams(); // we generally do like this
  const [searchParams] = useSearchParams(); // because we will not use here setSearchParams to set the search params
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Register the User" : "Login the User"}
          </Link>
        </div>
        {/* <h1 style={{ textAlign: "center", padding: "8px", margin: "8px" }}>
          {isLogin
            ? "Authenticating the existing User..."
            : "Registering the new User..."}
        </h1> */}
        <h1>
          {isLogin ? "Log with the existing User" : "Registering the new User"}
        </h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          {/* <button>
            {isLogin
              ? "Login" ? "Login" : "Authenticating..." : "Register" ? "Register" : "Saving..."}
          </button> */}
          <button disabled={isSubmitting}>
            {isLogin
              ? isSubmitting
                ? "Authenticating..."
                : "Login"
              : isSubmitting
              ? "Registering..."
              : "Register"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
