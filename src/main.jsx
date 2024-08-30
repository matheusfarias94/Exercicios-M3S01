import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import routers from "./router/routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
