"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const invalidText = (text) => {
  return !text || text.trim();
};

export async function shareMeal(formData) {
  // "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    creator_number: formData.get("number"),
    address: formData.get("address"),
  };

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0 ||
    invalidText(meal.creator) ||
    invalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    invalidText(meal.creator_number) ||
    invalidText(meal.address)
  ) {
    throw new Error("Invalid Input Field");
  }
  console.log(meal);
  await saveMeal(meal);
  redirect("/meals");
}

// const meal = {
//   title: formData.get("title"),
//   summary: formData.get("summary"),
//   instructions: formData.get("instructions"),
//   image: await ImagePicker.uploadImage(),
//   ingredients: JSON.parse(formData.get("ingredients")),
//   steps: JSON.parse(formData.get("steps")),
//   category: formData.get("category"),
//   creator: formData.get("creator"),
//   creator_email: formData.get("creator_email"),
//   creator_number: formData.get("creator_number"),
//   address: formData.get("address"),
// };
