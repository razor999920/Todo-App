import React, { useState } from "react";
import AuthenticationService from "./AuthenticationServices";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [inValidLogin, setInValidLogin] = useState(false);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    // if (username === "razor" && password === "dummy") {
    //   AuthenticationService.registerSuccessfulLogin(username, password);
    //   props.history.push(`/home/${username}`);
    // } else {
    //   setValidLogin(false);
    //   setInValidLogin(true);
    // }

    AuthenticationService.executeBasicsAuthenticatedService(username, password)
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(username, password);
        props.history.push(`/home/${username}`);
      })
      .catch(() => {
        setValidLogin(false);
        setInValidLogin(true);
      });
  };

  return (
    <React.Fragment>
      <h1 className="container">Login</h1>
      {inValidLogin && (
        <div className="alert alert-warning">Invalid Login Credentials</div>
      )}
      {validLogin && <div>Login Sucessfull</div>}
      <label>User Name: </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={usernameHandler}
      />
      <label>Password: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={passwordHandler}
      />
      <button className="btn btn-success" onClick={loginHandler}>
        Login
      </button>
    </React.Fragment>
  );
};

export default Login;
