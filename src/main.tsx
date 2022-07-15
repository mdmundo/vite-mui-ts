import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./Global";
import Theme from "./Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global>
      <Theme>
        <App />
      </Theme>
    </Global>
  </React.StrictMode>
);
