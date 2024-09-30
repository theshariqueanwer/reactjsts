"use client";
import React from "react";
import classes from "./error.module.css";

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meals data, Please try again later</p>
    </main>
  );
}

// export default function Error({ error }) {
//   return (
//     <main>
//       <h1 className={classes.error}>An error occurred</h1>
//       <p>Failed to fetch meal data, Please try again later</p>
//       <p>{error}</p>
//     </main>
//   );
// }
