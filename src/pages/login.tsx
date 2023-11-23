import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useEffect } from "react";

const Login = () => {
  const { authenticate, isAuthenticated } = useAuthentication();

  useEffect(() => {
    // Call authenticate only once when the component mounts
    authenticate();
  }, [authenticate]); // Empty dependency array ensures this effect runs only once

  if (isAuthenticated) {
    return <Navigate to="/blog" />;
  }

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;

