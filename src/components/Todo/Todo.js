import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Error from "../Error/Error";
import ListTodos from "./ListTodos";

const Todo = () => {
  return (
    <React.Fragment>
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home/:name" component={Home} />
            <Route path="/todos" component={ListTodos} />
            <Route component={Error} />
          </Switch>
        </>
      </Router>
    </React.Fragment>
  );
};

export default Todo;
