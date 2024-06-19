import { Form, useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  console.log(email);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     fetcher.submit();
  //   };

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    // <form method="post" className={classes.newsletter}>
    //   <input
    //     type="email"
    //     placeholder="Sign up for newsletter..."
    //     aria-label="Sign up for newsletter"
    //   />
    //   <button>Sign up</button>
    // </form>

    // <Form method="post" action="/newsletter" className={classes.newsletter}>
    //   <input
    //     type="email"
    //     placeholder="Sign up for newsletter..."
    //     aria-label="Sign up for newsletter"
    //   />
    //   <button>Sign up</button>
    // </Form>

    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        onChange={handleInputChange}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
