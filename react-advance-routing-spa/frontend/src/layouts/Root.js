import React from "react";
// import MainNavigation from "../navigations/MainNavigation";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
//   const navigation = useNavigation();

  // because useLoaderData we can use to it's child components but we can not use it's higher level components
  //   const events = useLoaderData();
  //   console.log(events); // so here we will get undefined values because higher level components do not have access of useLoaderData data
  return (
    <>
      {/* <MainNavigation /> */}
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <h1>Loading...</h1>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
