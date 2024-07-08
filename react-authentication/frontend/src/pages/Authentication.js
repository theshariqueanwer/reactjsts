import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { getLocalDateTime } from "../util/auth";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // const endpoint = mode === "signup"? "signup" : "login";
  // let message = "";
  // if (mode === "signup") {
  //   message = "Signup successful!";
  // } else {
  //   message = "Login successful!";
  // }

  // let message = "";
  // if (mode === "signup") {
  //   message = "could not register user.";
  // } else if (mode === "login") {
  //   message = "could not authenticate user.";
  // }

  // fetch("http://localhost:8080/" + endpoint);
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not authenticate user." }, { status: 500 });
  }

  // soon: manage that token
  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem("token", token);

  // This lines of code I put inside the getLocalDateTime method in auth.js
  // const date = new Date();
  // const offset = date.getTimezoneOffset() === 0 ? 0 : -1 * date.getTimezoneOffset();
  // const normalized = new Date(date.getTime() + (offset) * 60000);
  // const expiration = new Date(normalized.toLocaleString("en-US", {timeZone: "Asia/Calcutta"}));

  // This line was earlier modified with make use of getLocalDateTime method
  // const expiration = new Date();
  const expiration = getLocalDateTime();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toUTCString());

  return redirect("/");
}
