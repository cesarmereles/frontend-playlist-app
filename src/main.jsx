import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import AuthProviders from "../src/providers/AuthProviders.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AuthProviders>
);
