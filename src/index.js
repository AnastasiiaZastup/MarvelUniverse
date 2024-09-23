import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

import "./style/style.scss";

const marvelService = new MarvelService();

marvelService
  .getCharacter(1011334)
  .then((res) => res.data.results.forEach((item) => console.log(item.name)))
  .catch((error) => console.error(error));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
