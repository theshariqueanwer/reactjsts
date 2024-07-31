import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent } from "../../util/http.js";
import WarningForm from "./WarningForm.jsx";

export default function DeleteEvent() {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  //   const handleDelete = () => {
  //     mutate({ id: id });
  //   };

  function handleSubmit() {
    mutate({ id: id });
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {/* <h1>
        <button onClick={handleClose} className="cut-action" >
          X
        </button>
      </h1> */}
      <WarningForm onSubmit={handleSubmit} handleClose={handleClose}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Delete
        </button>
      </WarningForm>
    </Modal>

    // ---------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------

    // <Modal onClose={handleClose}>
    //   <h1>Are you sure </h1>
    //   <h2>You wanna delete this event ? </h2>
    //   <p className="form-actions">
    //     <Link to="../" className="button-text">
    //       Cancel
    //     </Link>
    //     <button onClick={handleDelete} className="button">
    //       Delete
    //     </button>
    //   </p>
    // </Modal>

    // ---------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------

    // <Modal onClose={handleClose}>
    //   <h1>Delete Event</h1>
    //   {isPending && <p>Loading...</p>}
    //   {isError && <p>Error: {error.message}</p>}
    //   {data && (
    //     <div>
    //       <h2>Are you sure you want to delete this event?</h2>
    //       <p>{data.title}</p>
    //     </div>
    //   )}

    //   {!isPending && !isError && data && (
    //     <button onClick={handleDelete}>Delete Event</button>
    //   )}
    //   <EventForm inputData={data} onSubmit={handleDelete}>
    //     <Link to="../" className="button-text">
    //       Cancel
    //     </Link>
    //     <button type="submit" className="button">
    //       Delete
    //     </button>
    //   </EventForm>
    // </Modal>
  );
}
