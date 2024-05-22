import React, { useContext, useState } from "react";
import UserProgressContext from "../../store/context/UserProgressContext";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { rnd, rndStr } from "../../generics/generic";

function Register() {
  const userProgressCtx = useContext(UserProgressContext);

  const [registration, setRegistration] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    userId: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setUser({
      ...user,
      username: user.name + rndStr(),
      userId: user.name + rnd,
      [identifier]: value,
    });
  }

  function handleCancel() {
    userProgressCtx.hideRegister();
  }

  function handleRegister() {}

  function onHandleSubmitRegistrationForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());

    const response = fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          ...userData,
          username: userData.name + rndStr().trim().toLowerCase(),
          userId: userData.name + rnd,
        },
      }),
    });
    console.log();
    if (response.ok) {
      setRegistration(true);
    }
    console.log(registration)
    if (registration === true) {
      localStorage.setItem("user", user);
      userProgressCtx.hideRegister();
    }
  }

  // 1800 889 3999

  return (
    <Modal className="checkout" open={userProgressCtx.progress === "register"}>
      <form action="" onSubmit={onHandleSubmitRegistrationForm}>
        <h2>Registration</h2>

        <div className="control-row">
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            onChange={(event) => handleInputChange("name", event.target.value)}
            placeholder="Full Name"
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="control-row">
          <Input
            label="Mobile"
            type="number"
            id="mobile"
            name="mobile"
            onChange={(event) =>
              handleInputChange("mobile", event.target.value)
            }
            placeholder="Mobile Number"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            placeholder="Password"
          />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleRegister}>Register</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Register;
