import React, { useState } from "react";
import HelloWorldService from "../../API/Todo/HelloWorldService";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [serverMessage, setServerMessage] = useState('');

  const retrieveWelcomeMessage = () => {
    // String
    // HelloWorldService.executeHelloWorldService().then((response) =>
    //   setServerMessage(response.data)
    // );

    // JSON
    // HelloWorldService.executeHelloWorldBeanService().then((response) => {
    //   setServerMessage(response.data.message); // For JSON data
    // });

    // Path Variable
    HelloWorldService.executeHelloWorldPathVariableService(
      props.match.params.name
    )
      .then((response) => {
        setServerMessage(response.data.message); // For JSON data
      })
      .catch((error) => handleError(error));
  };

  const handleError = (error) => {
    let error_message = "";
    if (error.message) error_message += error.message;

    if (error.response && error.response.data) {
      error_message += error.response.data.message
    } 

    setServerMessage(error_message);
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
