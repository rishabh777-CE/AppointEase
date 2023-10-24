import React from "react";
import 'antd/dist/antd.min.css'
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();





































// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// 
// Kommunicate.init("1f8cd9648aa340f07747a2a7983cc5d6c", {
//   automaticChatOpenOnNavigation: true,
//   popupWidget: true,
//   onInit:function () {
//    Kommunicate.customizeWidgetCss("#00510");
// }
// })