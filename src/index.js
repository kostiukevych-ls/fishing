import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import Socket from "./component/socket.jsx";

document.addEventListener("DOMContentLoaded", () => {
  // Access the global `bootstrap` function from the Applura client
  const client = window.bootstrap();  // Ensure `bootstrap` is globally accessible

  // Get the container and create the main component with Applura client
  const container = document.getElementById("app");
  const Main = <Socket App={App} client={client} />;

  // Launch the application
  ReactDOM.createRoot(container).render(Main);
});
