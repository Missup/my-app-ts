import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.min.css";
import "./i18n/config";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import axios from "axios";

// axios.defaults.headers['x-icode'] = '';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor}>
      <App />
    </PersistGate>
  </Provider>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
