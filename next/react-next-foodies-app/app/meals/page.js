import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  console.log("Meals Page Executing...");
  // const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <MealsGrid meals={[]} /> */}
        {/* <MealsGrid meals={meals} /> */}
        <Suspense fallback= {<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

// --------------------------------------------------------------------

// async function MealsPage() {
//   console.log("Meals Page Executing...");
//   const meals = await getMeals();
//   return (
//     <>
//       <header className={classes.header}>
//         <h1>
//           Delicious meals, created{" "}
//           <span className={classes.highlight}>by you</span>
//         </h1>
//         <p>
//           Choose your favorite recipe and cook it yourself. It is easy and fun!
//         </p>
//         <p className={classes.cta}>
//           <Link href="/meals/share">Share your favorite recipe</Link>
//         </p>
//       </header>
//       <main className={classes.main}>
//         {/* <MealsGrid meals={[]} /> */}
//         <MealsGrid meals={meals} />
//       </main>
//     </>
//   );
// }

// export default MealsPage;

// -----------------------------------------------------------------------------

// <main>
//   <h1>Meals</h1>
//   <p>
//     <Link href="/meals/meal-1">Meal 1</Link>
//   </p>
//   <p>
//     <Link href="/meals/meal-2">Meal 2</Link>
//   </p>
//   <p>
//     <Link href="/meals/meal-3">Meal 3</Link>
//   </p>
//   <p>
//     <Link href="/meals/meal-4">Meal 4</Link>
//   </p>
//   <p>
//     <Link href="/meals/share">Go to Share Meal</Link>
//   </p>
//   <p>
//     <Link href="/">Go Back to Main</Link>
//   </p>
// </main>
