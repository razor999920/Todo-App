import React, { useState } from "react";

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
    if (username === "razor" && password === "dummy") {
      props.history.push(`/home/${username}`);
    } else {
      setValidLogin(false);
      setInValidLogin(true);
    }
  };

  return (
    <React.Fragment>
      {inValidLogin && <div>Invalid Login Credentials</div>}
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
      <button onClick={loginHandler}>Login</button>
    </React.Fragment>
  );
};

export default Login;
