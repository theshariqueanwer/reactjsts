import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();

  // const token = useRouteLoaderData("root");
  // useRouteLoaderData is use only when component and loader function are for different routes
  // and because of that we are using id to call the useRouteLoaderData to get the data
  // useRouteLoaderData no need use here because RootLayout and loader are siblings
  // or in the same route so we need to make use of useLoaderData, so just use the useLoaderData
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    // setTimeout(() => {
    //   submit(null, { action: "/logout", method: "post" });
    // }, 1 * 60 * 60 * 1000);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
