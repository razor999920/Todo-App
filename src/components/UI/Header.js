import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div href="http://www.google.ca" className="navbar-brand">
            <a>Razor</a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/home/razor">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
