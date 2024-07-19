import React from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./Weather";


import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <formatDate />
    </div>
  </React.StrictMode>
);
