import React from "react";

const Home = (props) => {
  return (
    <React.Fragment>
      <div>Weclome {props.match.params.name}</div>
    </React.Fragment>
  );
};

export default Home;
