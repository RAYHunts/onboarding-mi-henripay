import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useEffect } from "react";

const Logout = () => {
  const { deauthenticate,isAuthenticated } = useAuthentication();

  useEffect(() => {
    // Call authenticate only once when the component mounts
    deauthenticate();
  }, [deauthenticate]); // Empty dependency array ensures this effect runs only once

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;

