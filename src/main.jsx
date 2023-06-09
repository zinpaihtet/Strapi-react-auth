import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MyApp />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
