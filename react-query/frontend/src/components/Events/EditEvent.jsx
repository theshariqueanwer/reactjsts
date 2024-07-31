import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const param = useParams();
  const submit = useSubmit();

  // const { data, isPending, isError, error } = useQuery({
  //   // queryKey: ["event", { id: param.id }],
  //   queryKey: ["events", param.id],
  //   queryFn: ({ signal }) => fetchEvent({ signal, id: param.id }),
  //   // staleTime: 6000,
  //   // refetchInterval: 1000,
  //   // gcTime: 1000
  // });

  const { data, isError, error } = useQuery({
    // queryKey: ["event", { id: param.id }],
    queryKey: ["events", param.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: param.id }),
    // staleTime: 6000,
    // refetchInterval: 1000,
    // gcTime: 1000
    staleTime: 10000
  });

  // const {
  //   mutate,
  //   isPending: isPendingUpdating,
  //   isError: isErrorUpdating,
  //   error: errorUpdating,
  // } = useMutation({
  //   mutationFn: updateEvent,
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({ queryKey: ["events", param.id] });
  //   //   navigate("../");
  //   // },  // onSuccess is not a optimistic here in updateEvent so will use onMutate here
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ["events", param.id] });
  //     const previousEvent = queryClient.getQueryData(["events", param.id]);

  //     queryClient.setQueryData(["events", param.id], newEvent);

  //     // return { previousEvent: previousEvent };
  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", param.id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", param.id]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: param.id, event: formData });
    // navigate("../");
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load the event for update"
          message={
            error.info?.message ||
            "Failed to load the event for update, please try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <>
        {/* {isPendingUpdating && <h2>Your event data is being updating...</h2>} */}
        {/* {isPendingUpdating && (
          <div className="center">
            <LoadingIndicator text="Please wait event data are updating..." />
          </div>
        )} */}
        {/* {isErrorUpdating && (
          <ErrorBlock
            title="Failed to update event"
            message={
              errorUpdating.info?.message ||
              "Failed to update event, please check your input and try again later."
            }
          />
        )} */}
        {state === "submitting" ? (
          <div className="center">
            <h2>Event are being updating please wait...</h2>
            <LoadingIndicator />
          </div>
        ) : (
          ""
        )}
        <EventForm inputData={data} onSubmit={handleSubmit}>
          {/* <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" disabled={isPendingUpdating} className="button">
            {!isPendingUpdating ? "Update" : "Updating..."}
          </button> */}
          {/* ------------------------------------------------------------- */}
          {/* {state === "submitting" ? (
            <p>Event are being updating please wait...</p>
          ) : (
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Update
              </button>
            </>
          )} */}
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={state === "submitting"}
              className="button"
            >
              {state === "submitting" ? "Updating please wait..." : "Update"}
            </button>
          </>
        </EventForm>
      </>
    );
  }

  return (
    <Modal onClose={handleClose}>{content}</Modal>
    // <Modal onClose={handleClose}>

    //   {isPending && <h2>Your event data for update is being loading...</h2>}
    //   {isError && (
    //     <ErrorBlock
    //       title="Failed to load event for update"
    //       message={
    //         error.info?.message ||
    //         "Failed to load event for update, please try again later."
    //       }
    //     />
    //   )}

    //   {isErrorUpdating && (
    //     <ErrorBlock
    //       title="Failed to update event"
    //       message={
    //         errorUpdating.info?.message ||
    //         "Failed to update event, please check your input and try again later."
    //       }
    //     />
    //   )}
    //   {isPendingUpdating && <h2>Your event data is being updating...</h2>}

    //   <EventForm inputData={data} onSubmit={handleSubmit}>

    //     <Link to="../" className="button-text">
    //       Cancel
    //     </Link>
    //     <button type="submit" className="button">
    //       Update
    //     </button>

    //     <>
    //       <Link to="../" className="button-text">
    //         Cancel
    //       </Link>
    //       <button type="submit" disabled={isPending} className="button">
    //         {!isPending ? "Update" : "Updating..."}
    //       </button>
    //     </>

    //   </EventForm>

    // </Modal>

    // -----------------------------------------------------------------------------
    // <Modal onClose={handleClose}>
    //   <EventForm inputData={null} onSubmit={handleSubmit}>
    //     <Link to="../" className="button-text">
    //       Cancel
    //     </Link>
    //     <button type="submit" className="button">
    //       Update
    //     </button>
    //   </EventForm>
    // </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedFormData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedFormData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
