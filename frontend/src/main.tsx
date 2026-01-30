import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
