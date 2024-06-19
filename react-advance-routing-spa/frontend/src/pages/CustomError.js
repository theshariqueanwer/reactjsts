import React from "react";
import PageContent from "../components/PageContent";
import { useNavigate, useRouteError } from "react-router-dom";
import classes from "./CustomError.module.css";
import MainNavigation from "../components/MainNavigation";

// function CustomErrorPage({ message }) {
function CustomErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  const navigateHandlerHome = () => {
    navigate("/");
  };

  let title = "An error occurred";
  let message = "something went wrong!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;

  }

  if (error.status === 404) {
    title = "Page not found";
    message = "could not find page or resources";
  }

  return (
    // <>
    //   {/* <div>
    //     <h1>An error occurred {message}!</h1>
    //   </div> */}
    //   <PageContent title={title}>
    //     <p>{message}</p>
    //   </PageContent>
    //   <div className={classes.content}>
    //   {error.status === 404 && <button onClick={navigateHandlerHome}>Go to Home</button>}
    //   </div>
    // </>
    <>
      <MainNavigation />
      {/* <div>
        <h1>An error occurred {message}!</h1>
      </div> */}
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      <div className={classes.content}>
        {error.status === 404 && (
          <button onClick={navigateHandlerHome}>Go to Home</button>
        )}
      </div>
    </>
  );
}

export default CustomErrorPage;

// it('should first', () => { second })
