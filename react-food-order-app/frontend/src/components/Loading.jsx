import React from "react";

function Loading({ message, loading }) {
  return (
    <div className="loading">
      <h1>{message}</h1>
      <h2>{loading}</h2>
    </div>
  );
}

export default Loading;
