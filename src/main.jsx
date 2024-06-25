import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS Files
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
