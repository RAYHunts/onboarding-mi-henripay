import { createContext, useState, useEffect } from "react";

const AuthContext = createContext<boolean>(false);

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem("token") !== null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  const authenticate = async () => {
    try {
      const fakeToken = "fake-token";
      localStorage.setItem("token", fakeToken);
      setIsAuthenticated(true);
      setToken(fakeToken);
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  const deauthenticate = async () => {
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setToken(null);
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  return { isAuthenticated, authenticate, error, token, deauthenticate };
};

export { AuthContext, useAuthentication };
