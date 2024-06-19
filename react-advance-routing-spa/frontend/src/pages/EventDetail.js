import React, { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  const navigate = useNavigate();
  const param = useParams();
  const eventId = param.eventId;

  // ----------------------------------------------------------------------------
  // const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvent() {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/events/${eventId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event with id " + eventId);
      } else {
        const responseData = await response.json();
        // setEvent(responseData.event);
      }
    }
    // setIsLoading(false);
    // fetchEvent();
    try {
      fetchEvent();
    } catch (error) {
      setError(error.message || "could not fetch event with id " + eventId);
    } finally {
      setIsLoading(false);
    }
  }, [eventId]);

  // useEffect(() => {
  //   async function fetchEvent() {
  //     setIsLoading(true);
  //     try {
  //       // const response = await request(`/api/events/${eventId}`);
  //       const response = await fetch(
  //         `http://localhost:8080/events/${eventId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch event");
  //       }
  //       const responseData = await response.json();
  //       // setEvent(response.data);
  //       setEvent(responseData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchEvent();
  // }, [eventId]);

  // console.log(event);
  // const data = useLoaderData();
  // const data = useRouteLoaderData("event-detail");

  const { event, events } = useRouteLoaderData("event-detail");

  return (
    // <>
    //   <h1>Hey Welcome in the Event Detail Page</h1>
    //   <h1>Event detail with event Id - {eventId}</h1>
    //   <button style={{ margin: "1rem" }} onClick={() => navigate("/events")}>
    //     Go Back
    //   </button>
    //   <button onClick={() => navigate("/")}>Go Home</button>
    // </>
    <>
      <h1>Hey Welcome in the Event Detail Page</h1>
      <h1>Event detail with event Id - {eventId}</h1>

      {/* <EventItem event={data.event} /> */}

      <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
        <Await resolve={event}>
          {/* {event => <EventItem event={event} />} */}
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
        <Await resolve={events}>
          {/* {(events) => <EventsList events={events} />} */}
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>

      <button style={{ margin: "1rem" }} onClick={() => navigate("/events")}>
        Go Back
      </button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      {
        message: "could not fetch details for the select event with id '" + id,
      },
      {
        status: 500,
      }
    );
  } else {
    // return response;
    const responseData = await response.json();
    return responseData.event;
  }
}

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

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

// export function loader({ request, params }) {
//   const id = params.eventId;

//   return defer({
//     event: loadEvent(id),
//     events: loadEvents(),
//   });
// }

// export async function loader({ request, params }) {
//   // to extract query parameter => request.url
//   const id = params.eventId;
//   // return fetch("http://localhost:8080/events/" + id);
//   const response = await fetch("http://localhost:8080/events/" + id);
//   if (!response.ok) {
//     throw json(
//       {
//         message: "could not fetch details for the select event with id '" + id,
//       },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     return response;
//   }
//   // return response;
// }

export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    // method: "DELETE",
    method: request.method,
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //   eventId: eventId,
    // }),
  });
  if (!response.ok) {
    throw new Error(
      { message: "Failed to fetch event with id " + eventId },
      { status: 500 }
    );
  }
  return redirect("/events");
};
