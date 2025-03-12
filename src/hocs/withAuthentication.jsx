import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      //authentication logic
      setAuthenticated(false);
    }, []);

    useEffect(() => {
      if (!authenticated) {
        navigate("/");
      }
    }, [authenticated]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
