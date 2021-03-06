import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import cookies from "js-cookie";

const AuthRoute = ({ component: Component, ...rest }) => {
const token = cookies.get('token')
  return (
    <Route
      {...rest}
      render={props =>
        rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(AuthRoute);