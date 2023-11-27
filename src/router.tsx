import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { AuthContext, useAuthentication } from "./hooks/useAuthentication";
import Login from "./pages/login";
import Logout from "./pages/logout";
import { ModalContactProvider } from "./contexts/modalContactContext";
import { ModalCookiesProvider } from "./contexts/modalCookiesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

const App = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <AuthContext.Provider value={isAuthenticated}>
      <ModalCookiesProvider>
        <ModalContactProvider>
          <RouterProvider router={router} />
        </ModalContactProvider>
      </ModalCookiesProvider>
    </AuthContext.Provider>
  );
};

export default App;
