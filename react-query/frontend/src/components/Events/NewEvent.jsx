import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { createEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["events"], exact: true });
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
    // navigate("../");
    // navigate("/events");
  }

  return (
    <Modal onClose={() => navigate("../")}>
      {/* {isPending && "Submitting..."} */}
      {isPending && <h2>Your event is being submitting...</h2>}
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create new event please check your input and try again"
          }
        />
      )}
      <EventForm onSubmit={handleSubmit}>
        {/* {isPending && "Submitting..."} */}
        {/* {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )} */}
        {/* {--------------------------------------------------} */}
        {/* {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
            {!isPending ? 'Submitting...' : 'Create' }
            </button>
          </>
        )} */}
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" disabled={isPending} className="button">
            {!isPending ? "Create" : "Submitting..."}
          </button>
        </>
      </EventForm>
      {/* {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={error.info?.message || "Failed to create new event"}
        />
      )} */}
    </Modal>

    // <Modal onClose={() => navigate("../")}>
    //   <EventForm onSubmit={handleSubmit}>
    //     <>
    //       <Link to="../" className="button-text">
    //         Cancel
    //       </Link>
    //       <button type="submit" className="button">
    //         Create
    //       </button>
    //     </>
    //   </EventForm>
    // </Modal>
  );
}
