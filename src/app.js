import React from "react";
import ReactDOM from "react-dom";
import IndecisionAPP from "./components/IndecisionAPP";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionAPP />, appRoot);
