import React from "react";
import { useLoaderData, useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const navigate = useNavigate();
  const param = useParams();
  const eventId = param.eventId;


  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");
  const event = data.event;


  return (
    <>
      <h1>Hey Welcome in the Edit Event Page</h1>
      <h2>You are about to edit the Event with id - {eventId}</h2>
      {/* <button style={{ margin: "1rem" }} onClick={() => navigate("/events")}>
        Go Back
      </button> */}
      {/* <EventForm method='patch' event={data.event} /> */}
      <EventForm method='patch' event={event} />
      <button style={{ margin: "1rem" }} onClick={() => navigate(`/events/${eventId}`)}>
        Go Back
      </button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
}

export default EditEventPage;
