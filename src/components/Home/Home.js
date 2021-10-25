import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <React.Fragment>
      <div>Weclome {props.match.params.name}. You can manage your todos <Link to="/todos">here</Link></div>
    </React.Fragment>
  );
};

export default Home;
