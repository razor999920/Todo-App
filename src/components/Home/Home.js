import React, { useState } from "react";
import HelloWorldService from "../../API/Todo/HelloWorldService";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [serverMessage, setServerMessage] = useState("");

  const retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService().then((response) =>
      setServerMessage(response.data)
    );
  };

  return (
    <React.Fragment>
      <h1>Welcome!</h1>
      <div className="container">
        Weclome {props.match.params.name}. You can manage your todos{" "}
        <Link to="/todos">here</Link>
      </div>
      <div className="container">
        Click here to go to server side.
        <button onClick={retrieveWelcomeMessage} className="btn btn-success">
          Get Welcome Message
        </button>
      </div>

      <div className="container">{serverMessage}</div>
    </React.Fragment>
  );
};

export default Home;
