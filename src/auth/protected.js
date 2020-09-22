import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedRouter = ({ component, ...rest }) => {
  // console.log(component);
  //console.log(rest);
  var RenderComponents = component;
  let hasToken = JSON.parse(localStorage.getItem('auth'));
  console.log(hasToken);
  console.log(RenderComponents);
  return (
    <Route
      {...rest}
      narayanaben
      render={(props) => {
        return hasToken !== null ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      }}
    />
  );
};
export default protectedRouter;
