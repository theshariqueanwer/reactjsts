import { json, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  // const enteredTitle = data.get('title');
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    // location: data.get('location'),
    // price: +data.get('price'),
  };

  let url = "http://localhost:8080/events";
  if(method === 'PATCH') {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }
 
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not save event data" }, { status: 500 });
  }

  // return {
  //   redirect: {
  //     destination: "/events",
  //     permanent: false,
  //   },
  // };  // we don't have a idea about the permanent

  return redirect("/events");
}
