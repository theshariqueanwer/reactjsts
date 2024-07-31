import { useState } from "react";

import ImagePicker from "../ImagePicker.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchSelectableImages } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function WarningForm({ onSubmit, handleClose, children }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <div className="controls-row">
        <p className="control">
          <h1>Are you sure you wanna delete this event ? </h1>
        </p>
        <p className="control">
          <h1>
            <button onClick={handleClose}>X</button>
          </h1>
        </p>
      </div>
      {/* <p className="control">
        <h2>You wanna delete this event ? </h2>
      </p> */}
      {/* <h2>You wanna delete this event ? </h2> */}
      <p className="form-actions">{children}</p>
    </form>
  );
}
