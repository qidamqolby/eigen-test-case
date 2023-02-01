import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NewsContextProvider } from "./contexts/NewsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </React.StrictMode>
);
