import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Error from "../Error/Error";
import ListTodos from "./ListTodos";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Todo = () => {
  return (
    <React.Fragment>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home/:name" component={Home} />
            <Route path="/todos" component={ListTodos} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </>
      </Router>
    </React.Fragment>
  );
};

export default Todo;
