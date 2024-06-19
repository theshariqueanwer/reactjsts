import React from "react";
import { useNavigate } from "react-router-dom";
import PageContent from "../components/PageContent";

function HomePage() {
    const navigate = useNavigate();
    const navigateHandlerEvents = () => {
        navigate("/events");
    }
  return (
    // <>
    //   <h1>Hey Welcome in the Home Page</h1>
    //   <button onClick={navigateHandlerEvents} >Events</button>
    // </>
    <PageContent title="Welcome!">
      <p>browse our all amazing events</p>
    </PageContent>
  );
}

export default HomePage;
