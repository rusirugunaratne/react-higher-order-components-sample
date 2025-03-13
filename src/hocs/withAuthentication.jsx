import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      // actual  authentication logic goes here
      if (!authenticated) {
        navigate("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
