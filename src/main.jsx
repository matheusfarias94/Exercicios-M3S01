import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import routers from "./router/routes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CadastroProvider } from "./context/CadastroContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CadastroProvider>
      <RouterProvider router={routers} />
    </CadastroProvider>
  </AuthProvider>
);
