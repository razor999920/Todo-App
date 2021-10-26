import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Error from "./components//Error/Error";
import ListTodos from "./components/Todo/ListTodos";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Logout from "./components/Auth/Logout";
import AuthenticatedRoute from "./components/Auth/AuthenticatedRoute";
import "./App.css";
import "./Bootstrap.css";

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
