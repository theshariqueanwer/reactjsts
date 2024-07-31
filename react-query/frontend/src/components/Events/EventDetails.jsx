import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  changeTimeFormat,
  deleteEvent,
  fetchEvent,
  queryClient,
} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import { useState } from "react";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  // const { navigate } = useRouter();
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const { data, isPending, isError, error } = useQuery({
    // queryKey: ["event", { id: param.id }],
    queryKey: ["events", param.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: param.id }),
    // staleTime: 6000,
    // refetchInterval: 1000,
    // gcTime: 1000
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeletion,
    error: errorDeletion,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const handleDelete = () => {
    // if (
    //   window.confirm(
    //     "Are you sure you want to delete this event with event id : " +
    //       id +
    //       " ?"
    //   )
    // ) {
    //   mutate({ id: param.id });
    // }
    // --------------------------------------------------------------------
    mutate({ id: param.id });
  };

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  // let deleteContent = (
  //   <Modal onClose={() => navigate("../")}>
  //     <div className="center">
  //       <p>Are you sure you want to delete this event with event id : {id}?</p>
  //       <button onClick={handleDelete}>Yes</button>
  //       <button onClick={() => navigate("/events/:id")}>No</button>
  //     </div>
  //   </Modal>
  // );

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event details data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          // title={`Failed to load the event with event id : ${id}`}
          title="Failed to load the event"
          message={
            error.info?.message || "Failed to fetch the event try again later"
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    // let formatter = new Intl.DateTimeFormat("en-IN", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   hour12: true,
    // });
    // let formattedTime = formatter.format(new Date());

    // let formattedTime = new Date(data.time).toLocaleTimeString("en-US", {
    //   hour12: true,
    // });

    // const formattedTime = new Date(data.time).toLocaleTimeString("en-IN", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   hour12: true,
    // });

    let time = data.time;
    let [hours, minutes] = time.split(":");
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const formattedTime = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    console.log(formattedTime); // "11:12 PM"

    content = (
      <>
        <header>
          {/* <h1>EVENT TITLE</h1> */}
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            {/* <button onClick={handleDelete}>Delete</button> */}
            {/* <Link to="delete">Delete</Link> */}
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        {/* -------------------------------------------------------------------- */}
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              {/* <p id="event-details-location">EVENT LOCATION</p> */}
              <p id="event-details-location">{data.location}</p>

              {/* <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time> */}
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {/* {data.date} @ {data.time} */}
                {formattedDate} &nbsp; @{formattedTime}
              </time>
            </div>
            {/* <p id="event-details-description">EVENT DESCRIPTION</p> */}
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure ?</h2>
          <p>
            Do your really want to delete this event? This action can not be
            undone
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {/* {!isPendingDeletion && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDelete} disabled={isPendingDeletion} className="button">
                  {isPendingDeletion ? "Deleting..." : "Delete"}
                </button>
              </>
            )} */}
            <button onClick={handleStopDelete} className="button-text">
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isPendingDeletion}
              className="button"
            >
              {isPendingDeletion ? "Deleting..." : "Delete"}
            </button>
          </div>
          {isErrorDeletion && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                errorDeletion.info?.message ||
                "Failed to delete event, please try again later."
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {/* <header>
          <h1>EVENT TITLE</h1>
          <h1>{data.title}</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header> */}
        {/* <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <p id="event-details-location">{data.location}</p>

              <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div> */}
        {content}
      </article>
    </>
  );
}
