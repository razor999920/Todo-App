import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Error from "../Error/Error";
import ListTodos from "./ListTodos";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Logout from "../Auth/Logout";
import AuthenticatedRoute from "../Auth/AuthenticatedRoute";

const Todo = () => {
  return (
    <React.Fragment>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <AuthenticatedRoute path="/logout" component={Logout} />
            <AuthenticatedRoute path="/home/:name" component={Home} />
            <AuthenticatedRoute path="/todos" component={ListTodos} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </>
      </Router>
    </React.Fragment>
  );
};

export default Todo;
