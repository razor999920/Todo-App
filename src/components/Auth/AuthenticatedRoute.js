import { Redirect, Route } from "react-router";
import AuthenticationServices from "./AuthenticationServices";

const AuthenticatedRoute = (props) => {
  const isUserLoggedIn = AuthenticationServices.isUserLoggedIn();

  return (
    <>{isUserLoggedIn ? <Route {...props} /> : <Redirect to="/login" />}</>
  );
};

export default AuthenticatedRoute;
