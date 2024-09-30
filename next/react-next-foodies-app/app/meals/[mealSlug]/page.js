import React from "react";
import Link from "next/link";

import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// export async function Meal() {
//   const meal = await getMeal();
// }

export default function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if(!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  // const instructions = meal.instructions.split('\n').map((line) => <p key={line}>{line}</p>);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <strong><a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></strong>
          </p>
          <p className={classes.creator}>
            contact <strong><a href={`tel:${meal.creator_number}`}>{meal.creator_number}</a></strong>
          </p>
          <p className={classes.creator}>
            Address <strong>{meal.address}</strong>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

// function MealDetailPage({ params }) {
//   return (
//     <main>
//       <h1>Meal Detail Page</h1>
//       <p>{params.mealSlug}</p>
//       <p>
//         <Link href="/meals">Go Back to Meals</Link>
//       </p>
//     </main>
//   );
// }

// export default MealDetailPage;
