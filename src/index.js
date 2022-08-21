import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NativeBaseProvider } from "native-base";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>
);
