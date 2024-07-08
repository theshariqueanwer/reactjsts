import { redirect } from "react-router-dom";

export function getLocalDateTime() {
  const date = new Date();
  const offset =
    date.getTimezoneOffset() === 0 ? 0 : -1 * date.getTimezoneOffset();
  const normalized = new Date(date.getTime() + offset * 60000);
  const currentDateTime = new Date(
    normalized.toLocaleString("en-US", { timeZone: "Asia/Calcutta" })
  );
  return currentDateTime;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);

  // This line was earlier modified with make use of getLocalDateTime method
  // const currentDate = new Date();
  const currentDate = getLocalDateTime();
  const duration = expirationDate.getTime() - currentDate.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    // return;
    // not only return, it should be return null
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/auth?mode=login");
    // return redirect("/auth");
  }
  
  // return!!getAuthToken();
  return null;
}
