// "use client";

import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/actions";
import MealsFromSubmit from "@/components/meals/meals-from-submit";

export default function ShareMealPage() {
  // async function shareMeal(formData) {
  //   "use server";

  //   const meal = {
  //     title: formData.get("title"),
  //     summary: formData.get("summary"),
  //     instructions: formData.get("instructions"),
  //     image: formData.get("image"),
  //     creator: formData.get("name"),
  //     creator_email: formData.get("email"),
  //     creator_number: formData.get("number"),
  //     address: formData.get("address"),
  //   };

  //   console.log(meal)
  // }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <div className={classes.row}>
            <p>
              <label htmlFor="number">Your Number</label>
              <input type="number" id="number" name="number" required />
            </p>
            <p>
              <label htmlFor="address">Your Address</label>
              <input type="tel" id="address" name="address" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {/* <ImagePicker name="image" label="Choose Your Recipe" /> */}
          <ImagePicker name="image" label="Your Image" />
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealsFromSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
