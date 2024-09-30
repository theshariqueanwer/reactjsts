'use client';
import React from "react";
import { useFormStatus } from "react-dom";

export default function MealsFromSubmit() {
  // const status = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
