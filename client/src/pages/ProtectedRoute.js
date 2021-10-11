import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticationRequest } from "../state/action-creators/user-actions";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    authenticationRequest()(dispatch).then((res) => {
      setIsAuth(res);
    });
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true) {
          return <Component />;
        } else if (isAuth === false && isAuth !== undefined) {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
