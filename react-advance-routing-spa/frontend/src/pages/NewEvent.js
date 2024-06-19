import React from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  const navigate = useNavigate();
  const createEventHandle = () => {};

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const location = formData.get("location");
  //   const date = formData.get("date");
  //   const price = formData.get("price");
  //   const image = formData.get("image");
  //   console.log(title);
  //   console.log(description);
  //   console.log(location);
  //   console.log(date);
  //   console.log(price);
  //   console.log(image);
  //   navigate("/events");
  // }

  return (
    <>
      <h1>Hey Welcome in the New Event Page</h1>

      <EventForm method="post" />

      <button style={{ margin: "1rem" }} onClick={() => navigate("/")}>
        Go Home
      </button>
      <button style={{ margin: "1rem" }} onClick={createEventHandle}>
        Create Event
      </button>
      <button style={{ margin: "1rem" }} onClick={() => navigate("/events")}>
        Go Back
      </button>
    </>
  );
}

export default NewEventPage;

// I have move this below action to the the EventForm.js Component

// export async function action({ request, params }) {
//   const data = await request.formData();

//   // const enteredTitle = data.get('title');
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//     // location: data.get('location'),
//     // price: +data.get('price'),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "could not save event data" }, { status: 500 });
//   }

//   // return {
//   //   redirect: {
//   //     destination: "/events",
//   //     permanent: false,
//   //   },
//   // };  // we don't have a idea about the permanent

//   return redirect("/events");
// }

export const action = async (request, params) => {};
