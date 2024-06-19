import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const navigateHandlerHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="error">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist</p>
      </div>
      <div>
        <button className="action-button" style={{ margin: "1rem" }} onClick={navigateHandlerHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
