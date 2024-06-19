import React, { Suspense, useEffect, useState } from "react";
import {
  Await,
  Link,
  defer,
  json,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  // const events = useLoaderData();
  // const location = useLocation();

  // const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;

  // return (
  //   <>
  //     <EventsList events={events} />
  //     {/* <EventsList /> */}
  //     {/* <p>{location.pathname}</p> */}
  //   </>
  // );

  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
      <Await resolve={events}>
        {/* {(events) => <EventsList events={events} />}  */}
        {(loadedEvent) => <EventsList events={loadedEvent} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// we could also store it in another shared file
// and export it but here, I will quickly copy it

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    // return response;
    const responseData = await response.json();
    return responseData.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};

// const loadEvents = async () => {
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     throw json({ message: "could not fetch events" }, { status: 500 });
//   } else {
//     // return response;
//     const responseData = await response.json();
//     return responseData.events;
//   }
// };

// export const loader = () => {
//   return defer({
//     events: loadEvents(),
//   });
// };

// export const loader = async () => {
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     throw json({ message: "could not fetch events" }, { status: 500 });
//   } else {
//     return response;
//   }
// };

// export const loader = async () => {
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     // return { isError: true, message: "could not fetch events." };
//     // throw new Error();
//     // throw { message: 'Could not fetch events' };
//     // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
//     //   status: 500,
//     // });
//     throw json({ message: "could not fetch events" }, { status: 500 });
//   } else {
//     return response;
//   }
// };

// export const loader = async () => {
//   // in side the loader function we can put any browser api
//   // or localStorage methods or cookies in the loader function
//   // ok so one thing we can use hooks in the loader function
//   // because hooks are used in components but loader functions in not a component
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     //...
//     // we can return different responses or just return the object
//     // return different responses
//     // return new Response();
//     // return just the object
//     return { isError: true, message: "could not fetch events." };
//   } else {
//     // const responseData = await response.json();
//     // without checking wether the response is correct or not
//     return response;
//     // with checking wether the response is correct or not with response data as events
//     // return responseData.events;
//     // this is with built-in browser features that as Response object
//     // const response = new Response('any data', {status: 201});
//     // return response;
//   }
// };

// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");
//   if (!response.ok) {
//     //...
//   } else {
//     const responseData = await response.json();
//     return responseData.events;
//   }
// }
