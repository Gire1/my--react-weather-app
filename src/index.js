import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import WeatherSearch from './Weather';


const rootElement = document.getElementById('root');
const root=createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <WeatherSearch />
  </React.StrictMode>
);

