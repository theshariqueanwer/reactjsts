import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventsList from "./EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [fetchedEvents, setFetchedEvents] = useState;

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(`https://localhost:8080/events`);
      if (!response.ok) {
        setError("Fetching events failed");
      } else {
        const responseData = await response.json();
        setFetchedEvents(responseData);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p> loading... </p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;
