import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PaginaLogin from "../pages/login";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import App from "../App";
import CadastrarUsuario from "../pages/cadastroUsuario";

const PrivateRoute = ({ children }) => {
  const { checkToken } = useContext(AuthContext);

  if (checkToken() === false) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }

};

const routers = createBrowserRouter([
  {
    path: "/login",
    element: <PaginaLogin />,
  },
  {
    path: "/cadastro",
    element: <CadastrarUsuario />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },

      
    ],
  },
]);

export default routers;
