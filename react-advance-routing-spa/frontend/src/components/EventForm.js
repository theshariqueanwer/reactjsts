import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    // <Form method="post" action="/any-other-path" className={classes.form}>
    // <Form method="post" className={classes.form}>
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      {/* <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p> */}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter your event title"
          defaultValue={event ? event.title : ""}
        />
      </p>
      {/* <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p> */}
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          placeholder="Enter your event image"
          defaultValue={event ? event.image : ""}
        />
      </p>

      {/* ----------------------------------------------------------------------- */}
      {/* <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="image" name="image" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="file" name="image" required />
      </p> */}
      {/* <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p> */}
      {/* ----------------------------------------------------------------------- */}

      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          placeholder="Enter your event date in dd-mm-yyyy format"
          defaultValue={event ? event.date : ""}
        />
      </p>
      {/* <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p> */}
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Enter your event description"
          defaultValue={event ? event.description : ""}
        />
      </p>

      {/* ----------------------------------------------------------------------- */}

      {/* <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div> */}

      {/* <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          Save
        </button>
      </div> */}

      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>

    // --------------------------------------------------------------------------
    // <form className={classes.form}>
    //   <p>
    //     <label htmlFor="title">Title</label>
    //     <input
    //       id="title"
    //       type="text"
    //       name="title"
    //       required
    //       defaultValue={event ? event.title : ""}
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor="image">Image</label>
    //     <input
    //       id="image"
    //       type="url"
    //       name="image"
    //       required
    //       defaultValue={event ? event.image : ""}
    //     />
    //   </p>
    //   {/* <p>
    //     <label htmlFor="image">Image</label>
    //     <input id="image" type="image" name="image" required />
    //   </p> */}
    //   {/* <p>
    //     <label htmlFor="image">Image</label>
    //     <input id="image" type="file" name="image" required />
    //   </p> */}
    //   <p>
    //     <label htmlFor="date">Date</label>
    //     <input
    //       id="date"
    //       type="date"
    //       name="date"
    //       required
    //       defaultValue={event ? event.date : ""}
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor="description">Description</label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       rows="5"
    //       required
    //       defaultValue={event ? event.description : ""}
    //     />
    //   </p>
    //   <div className={classes.actions}>
    //     <button type="button" onClick={cancelHandler}>
    //       Cancel
    //     </button>
    //     <button>Save</button>
    //   </div>
    // </form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  // console.log(request);
  // console.log(params);
  const data = await request.formData();

  // const enteredTitle = data.get('title');
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    // location: data.get('location'),
    // price: +data.get('price'),
  };

  let url = "http://localhost:8080/events";

  if(method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    // method: "POST",
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not save event data" }, { status: 500 });
  }

  // return {
  //   redirect: {
  //     destination: "/events",
  //     permanent: false,
  //   },
  // };  // we don't have a idea about the permanent

  return redirect("/events");
}
