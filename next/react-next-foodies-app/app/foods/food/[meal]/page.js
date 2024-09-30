import Link from "next/link";
import React from "react";

function MealPage({ params }) {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.meal}</p>
      <p>
        <Link href="/meals">Go Back to Meals</Link>
      </p>
    </main>
  );
}

export default MealPage;
