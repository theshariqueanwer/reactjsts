import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
  { id: "e4", title: "Event 4" },
  { id: "e5", title: "Event 5" },
];

function EventsPage() {
  const navigate = useNavigate();
  const navigateHandlerHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Hey Welcome in the Event Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            {/* <Link to={`/events/${event.id}`} style={{margin: "1rem"}}>{event.title}</Link> */}
            <Link to={event.id} style={{ margin: "1rem" }}>
              {event.title}
            </Link>

            {/* <button onClick={() => navigate(`/events/${event.id}/edit`)}>
              Edit the Event
            </button> */}
            <button onClick={() => navigate(`${event.id}/edit`)}>
              Edit the Event
            </button>
          </li>
        ))}
      </ul>
      <button style={{ margin: "1rem" }} onClick={navigateHandlerHome}>
        Home
      </button>
    </>
  );
}

export default EventsPage;
