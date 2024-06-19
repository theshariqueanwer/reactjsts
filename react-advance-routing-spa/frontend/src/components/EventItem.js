import { Link, useNavigate, useParams, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  const navigate = useNavigate();
  const param = useParams();
  const eventId = param.eventId;
  function startDeleteHandler() {
    // ...
    const proceed = window.confirm(`Are you sure you wanna delete this event with id ${eventId} ?`);

    if (proceed) {
      submit(null, { method: "delete" });
    } // in submit method is delete and path is current we do not need to pass action here
  }

  const eventCancelHandler = () => {
    // navigate(-1);  // for this navigation we will go only the most previous navigation visit link
    // navigate(-1, { replace: true });  // for this navigation we will go only the most previous navigation visit link but it will replace the current navigation visit link
    navigate("/events");
  };

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        {/* <a href="edit">Edit</a> */}
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
        <button style={{ color: "red" }} onClick={eventCancelHandler}>
          Cancel
        </button>
      </menu>
    </article>
  );
}

export default EventItem;
