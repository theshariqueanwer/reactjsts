import React, { useContext, useState } from "react";
import UserProgressContext from "../../store/context/UserProgressContext";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";

function Login() {
  const userProgressCtx = useContext(UserProgressContext);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setUser({
      ...user,
      [identifier]: value,
    });
  }

  function handleCancel() {
    userProgressCtx.hideLogin();
  }

  function handleLogin() {}

  function onHandleLogin(event) {
    event.preventDefault();
    setLogin(true);
  }

  return (
    <Modal className="checkout" open={userProgressCtx.progress === "login"}>
      <form action="" onSubmit={onHandleLogin}>
        <h2>Login</h2>
        <div className="control-row">
          <Input
            label="User ID"
            type="text"
            id="userId"
            name="userId"
            onChange={(event) =>
              handleInputChange("userId", event.target.value)
            }
            placeholder="User Id"
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
          <Button onClick={handleLogin}>
            Login
          </Button>
        </p>
      </form>
    </Modal>
  );
}

export default Login;
